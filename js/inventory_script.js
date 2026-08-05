const inventorySidebar = document.getElementById("inventorySidebar");
const inventoryNavButtons = document.querySelectorAll(".inventory-nav-button");
const inventoryMainHeader = document.querySelector(".inventory-main-header");
const lifeSegmentGrid = document.querySelector(".life-segment-grid");

const inventoryMenuButton = document.getElementById("inventoryMenuButton");

inventoryMenuButton.addEventListener("click", function() {
    inventorySidebar.classList.toggle("closed");
})


const fullInventoryButton = document.getElementById("fullInventoryButton");
const lifeSegmentsButton = document.getElementById("lifeSegmentsButton");
const stampsButton = document.getElementById("stampsButton");
const collectiblesButton = document.getElementById("collectiblesButton");

const lifeSegmentsSection = document.getElementById("lifeSegmentsSection");
const stampsSection = document.getElementById("stampsSection");
const collectiblesSection = document.getElementById("collectiblesSection");

const modalOverlay = document.getElementById("modalOverlay");
const postcardGrid = document.getElementById("postcardGrid");

const chooseLifeSegmentImage = document.getElementById("chooseLifeSegmentImage");
const deleteLifeSegmentButton = document.getElementById("deleteLifeSegmentButton");
let selectedLifeSegmentID = null;
let selectedPostcard = null;
let selectedMusicRecommendation = null;

const editPostcardOverlay = document.getElementById("editPostcardOverlay");
const editPostcard = document.getElementById("editPostcard");
const editPostcardText = document.getElementById("editPostcardText");
const editPostcardImage = document.getElementById("editPostcardImage");
const editStampPreview = document.getElementById("editStampPreview");

const editCaptionPreview = document.getElementById("editCaptionPreview");
const editMusicPreview = document.getElementById("editMusicPreview");
const editDatePreview = document.getElementById("editDatePreview");
const editLocationPreview = document.getElementById("editLocationPreview");

function resetButtonColors() {
    fullInventoryButton.style.backgroundColor = "gold";
    lifeSegmentsButton.style.backgroundColor = "gold";
    stampsButton.style.backgroundColor = "gold";
    collectiblesButton.style.backgroundColor = "gold";
}

function hideAllSections() {
    lifeSegmentsSection.style.display = "none";
    stampsSection.style.display = "none";
    collectiblesSection.style.display = "none";
}

// Button Features for Sidebar Menu
fullInventoryButton.addEventListener("click", function(){
    lifeSegmentsSection.style.display = "block";
    stampsSection.style.display = "block";
    collectiblesSection.style.display = "block";

    resetButtonColors();
    fullInventoryButton.style.backgroundColor = "lightblue";
})

lifeSegmentsButton.addEventListener("click", function() {
    hideAllSections();
    lifeSegmentsSection.style.display = "block";

    resetButtonColors();
    lifeSegmentsButton.style.backgroundColor = "lightblue";
})

stampsButton.addEventListener("click", function() {
    hideAllSections();
    stampsSection.style.display = "block";

    resetButtonColors();
    stampsButton.style.backgroundColor = "lightblue";

})

collectiblesButton.addEventListener("click", function() {
    hideAllSections();
    collectiblesSection.style.display = "block";

    resetButtonColors();
    collectiblesButton.style.backgroundColor = "lightblue";
})


const returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", function(){
    window.location.href = "index.html";
})

// Load inventory life segments
async function loadInventoryLifeSegments() {
    // Get the logged in user
    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError) {
        console.error(authError);
        return;
    }

    if (!authData.user) {
        return;
    }

    const userID = authData.user.id;

    // Get the life segments
    const { data: lifeSegments, error } = await supabaseClient
        .from("life_segments")
        .select("id, title, created_at, cover_image")
        .eq("user_id", userID);
    
    
    // Get the postcards
    const { data: postcards, error: postcardsError } = await supabaseClient
        .from("postcards")
        .select("life_segment_id") // only select this column cuz we want the postcards
        .eq("user_id", userID);

    // Count how many postcards belong to each life segment
    const postcardCounts = {};

    for (const postcard of postcards) {
        const lifeSegmentID = postcard.life_segment_id;

        if (postcardCounts[lifeSegmentID] === undefined) {
            postcardCounts[lifeSegmentID] = 1;
        }
        else {
            postcardCounts[lifeSegmentID]++;
        }
    }
    
    //Insert the HTML
    lifeSegmentGrid.innerHTML = "";

    for (const segment of lifeSegments) {

        const card = `
    <div class="life-segment" data-segment-id="${segment.id}" data-segment-title="${segment.title}">
        <img src="assets/images/life-segment-covers/${segment.cover_image}.svg" class="life-segment-cover" alt="${segment.title} cover image">

        <h3 class="life-segment-title">
            ${segment.title}
        </h3>

        <p class="life-segment-postcards">
            Contains ${postcardCounts[segment.id] || 0} Postcards
        </p>

        <p class="life-segment-date">
            Created on ${segment.created_at.slice(0, 10)}
        </p>
    </div>`;
        
        lifeSegmentGrid.innerHTML += card;
    }

    const lifeSegmentCards = document.querySelectorAll(".life-segment");
    const lifeSegmentModalHeading = document.getElementById("lifeSegmentModalHeading");

    for (const card of lifeSegmentCards){

        card.addEventListener("click", async function() {

            try {
                showLoading("Loading Life Segment...");
                selectedLifeSegmentID = card.dataset.segmentId;
                lifeSegmentModalHeading.textContent = `View Postcards in ${card.dataset.segmentTitle}`;
                const postcards = await loadPostcards(card.dataset.segmentId);
                displayPostcards(postcards);
                modalOverlay.style.display = "flex";
            
            } catch (error) {
                alert("Error: ", error.message)
                console.log(error)

            } finally {
                hideLoading();
            }
            
        })
    }


}

chooseLifeSegmentImage.addEventListener("change", async function() {

    if (!selectedLifeSegmentID) {
        alert("No Life Segment is currently selected.")
        return;
    }

    const selectedCoverImage = chooseLifeSegmentImage.value;
    
    if (!selectedCoverImage) {
        return;
    }

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();
        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error("You must be logged in.")
        }

        const userID = authData.user.id;

        const { data: updatedSegments, error: updateError } = await supabaseClient
            .from("life_segments")
            .update({cover_image: selectedCoverImage})
            .eq("id", selectedLifeSegmentID)
            .eq("user_id", userID)
            .select();
        
        if (updateError) {
            throw updateError;
        }

        // Edge case: Supabase may return no error but update zero rows
        if (!updatedSegments || updatedSegments.length === 0) {
            throw new Error("No Life Segment was updated. Check your UPDATE policy.");
        }

        // Select the life segment currently on screen and change its image
        const selectedCard = document.querySelector(`.life-segment[data-segment-id="${selectedLifeSegmentID}"]`);
        selectedCard.querySelector(".life-segment-cover").src = `assets/images/life-segment-covers/${selectedCoverImage}.svg`;

        alert("Life Segment cover updated!")

    } catch (error) {
        console.error(error);

        alert("Could not change the Life Segment cover: " + error.message);
    }

    
})

deleteLifeSegmentButton.addEventListener("click", async function() {
    if (!selectedLifeSegmentID) {
        return;
    }

    const confirmed = confirm("Are you sure you want to delete this Life Segment?");
    if (!confirmed) {
        return;
    }

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error("You must be logged in.")
        }

        const userID = authData.user.id;

        const { error: deleteError } = await supabaseClient
            .from("life_segments")
            .delete()
            .eq("id", selectedLifeSegmentID)
            .eq("user_id", userID);
        
        if (deleteError) {
            throw deleteError;
        }

        modalOverlay.style.display = "none";
        selectedLifeSegmentID = null;

        await loadInventoryLifeSegments();

    } catch (error) {
        console.error(error);
        alert("Error: Could not delete Life Segment (" + error.message + ")");
    }
});

// Function to load the postcards
async function loadPostcards(lifeSegmentID) {
    const { data: postcards, error: postcardsError } = await supabaseClient
        .from("postcards")
        .select("id, caption, image_url, location, postcard_date, created_at, stamp, mood, music_piece, postcard_background")
        .eq("life_segment_id", lifeSegmentID);

    if (postcardsError) {
        throw postcardsError;
    }

    return postcards;
}

function displayPostcards(postcardsData) {
    postcardGrid.innerHTML = "";

    for (const postcard of postcardsData) {
        const postcardBackground = findCollectibleByID(postcard.postcard_background);
        const postcardTextColor = postcardBackground ? postcardBackground.text_color : "black";
        const backgroundImage = postcardBackground ? postcardBackground.image : "";

        const htmlTemplate = `
            <div class="inventory-postcard" data-postcard-id="${postcard.id}" style="background-image: url('${backgroundImage}')">
                <div class="postcard-photo-container">
                    <img class="postcard-photo" src="${postcard.image_url}">
                    <img class="postcard-stamp" src="${postcard.stamp}">
                </div>

                <div class="postcard-body" style="color: ${postcardTextColor};">
                    <p class="postcard-caption">${postcard.caption || "No Caption"}</p>
                    <p class="postcard-music">♫ Currently listening to: ♫\n${postcard.music_piece || ""}</p>
                    <p class="postcard-date">${postcard.postcard_date}</p>
                    <p class="postcard-location">${postcard.location}</p>
                </div>
            </div>
            `;
        
        postcardGrid.innerHTML += htmlTemplate;

    }

    const postcardCards = document.querySelectorAll(".inventory-postcard");

    for (const card of postcardCards) {

    card.addEventListener("click", async function () {
        showLoading("Opening Postcard...");

        try {
            const postcardID = card.dataset.postcardId;

            selectedPostcard = postcardsData.find(function(postcard) {
                return postcard.id === postcardID;
            });

            if (!selectedPostcard) {
                throw new Error("Postcard not found.")
            }

            const postcardBackground = findCollectibleByID(selectedPostcard.postcard_background);

            if (!postcardBackground) {
                console.warn("Postcard background not found:", selectedPostcard.postcard_background);
                return;
            }

            const postcardTextColor = postcardBackground ? postcardBackground.text_color : "white";

            editPostcardImage.src = selectedPostcard.image_url;
            editCaptionPreview.textContent = selectedPostcard.caption;

            // Don't display music stuff if the user did not select a piece to begin with
            if (selectedPostcard.music_piece){
                editMusicPreview.textContent = `♫ Currently listening to: ♫\n${selectedPostcard.music_piece}`;
                const savedMusic = findMusicByPieceName(selectedPostcard.music_piece);
                
                if (savedMusic && savedMusic.audio) {
                    editMusicPlayer.src = savedMusic.audio;
                    editMusicPlayer.style.display = "block";
                    rerollButton.style.display = "block";
                    editPostcardMusicControls.style.display = "inline-flex";
                    editMusicPlayer.play().catch(function(error) {
                        console.warn("Autoplay prevented:", error);
                    });

                } else {
                    editMusicPlayer.pause();
                    editMusicPlayer.removeAttribute("src");
                    editMusicPlayer.load();
                    editMusicPlayer.style.display = "none";
                    rerollButton.style.display = "none";
                    editPostcardMusicControls.style.display = "none";

                    console.log("Could not find audio for:", selectedPostcard.music_piece);
                }
            }
            
            editDatePreview.textContent = selectedPostcard.postcard_date;
            editLocationPreview.textContent = selectedPostcard.location;
            
            moodSelect.value = selectedPostcard.mood || "";
            selectedMusicRecommendation = null;

            editPostcardText.style.color = postcardTextColor;

            if (postcardBackground) {
                editPostcard.style.backgroundImage = `url("${postcardBackground.image}")`;
            } else {
                editPostcard.style.backgroundImage = "";
            }

            if (selectedPostcard.stamp) {
                editStampPreview.src = selectedPostcard.stamp;
                editStampPreview.style.display = "block";
            } else {
                editStampPreview.src = "";
                editStampPreview.style.display = "none";
            }
            

            savePostcardEditsButton.onclick = async function () {
                showLoading("Saving postcard...");

                try {
                    await savePostcardToSupabase(selectedPostcard);
                } catch (error) {
                    console.error(error);
                    alert(error.message);
                } finally {
                    hideLoading();
                }
            };

            editPostcardOverlay.style.display = "flex";

            requestAnimationFrame(function () {
                resizePostcardText();
            })

        } catch (error) {
            console.error(error);
            alert("Could not open Postcard: " + error.message);
        } finally {
            hideLoading();
        }
    });
}
}


// Function to load the stamps
const stampsGrid = document.querySelector(".stamps-grid");

async function loadInventoryStamps() {
    const { data: authData } = await supabaseClient.auth.getUser();

    if (!authData.user){
        return;
    }

    const userID = authData.user.id;

    stampsGrid.innerHTML = "";

    const { data: stampData, error: stampError } = await supabaseClient
        .from("profiles")
        .select("owned_stamps")
        .eq("user_id", userID);
    
        if (stampError) {
            console.error(stampError);
            return;
        }
    
    for (const stampName of stampData[0].owned_stamps) {
        const htmlTemplate = `
            <div class="stamp-icon">
                <img src="${stampDatabase[stampName].image}" class="stamp-cover">
                <h3 class="stamp-title">${stampDatabase[stampName].name}</h3>
                <p class="stamp-rarity">Rarity: ${stampDatabase[stampName].rarity}</p>
            </div>`;

        stampsGrid.innerHTML += htmlTemplate;
    }
}

// Function to load the collectibles
const collectiblesGrid = document.querySelector(".collectibles-grid");

async function loadCollectibles() {
    const { data: authData } = await supabaseClient.auth.getUser();

    if (!authData.user){
        return;
    }

    const userID = authData.user.id;
    collectiblesGrid.innerHTML = "";

    const { data: collectiblesData, error: collectiblesError } = await supabaseClient
        .from("profiles")
        .select("owned_collectibles")
        .eq("user_id", userID)
        .single();
    
    if (collectiblesError) {
        console.error(collectiblesError);
        return;
    }

    const ownedCollectibles = collectiblesData.owned_collectibles || [];
    
    for (const collectibleID of ownedCollectibles) {
        const collectible = findCollectibleByID(collectibleID);

        if (!collectible) {
            console.warn("Collectible not found: ", collectibleID);
            continue;
        }

        let collectibleCategory = collectible.category;
        let collectibleCategoryBackgroundColor = "gold";
        
        if (collectible.category === "postcardBackgrounds") {
            collectibleCategory = "Postcard Background";
        } else if (collectible.category === "wallpapers") {
            collectibleCategory = "Wallpaper";
            collectibleCategoryBackgroundColor = "limegreen";
        } else if (collectible.category === "exclusiveMusic") {
            collectibleCategory = "Exclusive Music";
            collectibleCategoryBackgroundColor = "orange";
        }

        const htmlTemplate = `
        
            <div class="collectible-card">
                <img src="${collectible.image}" alt="${collectible.name}" class="collectible-image">
                <h3 class="collectible-title">${collectible.name}</h3>
                <p class="collectible-description">${collectible.description || ""}</p>
                <p class="collectible-category" style="background-color: ${collectibleCategoryBackgroundColor}">${collectibleCategory}</p>
            </div>
            `;

        collectiblesGrid.innerHTML += htmlTemplate;
    }
}

// Edit Postcard Modal Control Buttons ///
const editPostcardLocation = document.getElementById("editPostcardLocation");
editPostcardLocation.addEventListener("click", function (){
    getLocation(editLocationPreview);
});

const savePostcardEditsButton = document.getElementById("savePostcardEditsButton");

const closeLifeSegmentModalButton = document.getElementById("closeLifeSegmentModalButton");
closeLifeSegmentModalButton.addEventListener("click", function(){
    modalOverlay.style.display = "none";
});

const closeEditPostcardButton = document.getElementById("closeEditPostcardButton");
closeEditPostcardButton.addEventListener("click", function() {
    editMusicPlayer.pause();
    editPostcardOverlay.style.display = "none";
})


/// POPUP FOR EDITING CAPTION ///
const editCaptionButton = document.getElementById("editCaptionButton");
const captionEditorOverlay = document.getElementById("captionEditorOverlay");
const captionEditorInput = document.getElementById("captionEditorInput");
const applyCaptionButton = document.getElementById("applyCaptionButton");
const closeCaptionEditorButton = document.getElementById("closeCaptionEditorButton");
const moodSelect = document.getElementById("moodSelect");

const editPostcardMusicControls = document.getElementById("editPostcardMusicControls");
const editMusicPlayer = document.getElementById("editMusicPlayer");
const rerollButton = document.getElementById("rerollButton");

const deletePostcardButton = document.getElementById("deletePostcardButton");
const downloadPostcardButton = document.getElementById("downloadPostcardButton");
const sharePostcardButton = document.getElementById("sharePostcardButton");

editCaptionButton.addEventListener("click", function () {
    // Copy the current caption into the textarea
    captionEditorInput.value = editCaptionPreview.textContent;

    captionEditorOverlay.style.display = "flex";
    captionEditorInput.focus();
});

moodSelect.addEventListener("change", function() {
    const selectedMood = moodSelect.value;

    if (selectedMood === "") {
        selectedMusicRecommendation = null;
        editMusicPreview.textContent = "";
        editMusicPlayer.pause();
        editMusicPlayer.removeAttribute("src");
        editMusicPlayer.load();
        editMusicPlayer.style.display = "none";
        rerollButton.style.display = "none";
        editPostcardMusicControls.style.display = "none";
        resizePostcardText();
        return;
    }

    const recommendations = musicDatabase[selectedMood];

    if (!recommendations || recommendations.length === 0) {
        console.warn("No music found for mood:", selectedMood);
        return;
    }

    const randomIndex = Math.floor(Math.random() * recommendations.length);

    selectedMusicRecommendation = recommendations[randomIndex];

    editMusicPreview.textContent = "♫ Currently listening to: ♫\n" + selectedMusicRecommendation.piece;
    editMusicPlayer.src = selectedMusicRecommendation.audio;
    editPostcardMusicControls.style.display = "inline-flex";
    editMusicPlayer.style.display = "block";
    rerollButton.style.display = "block";

    editMusicPlayer.play().catch(function(error) {
        console.warn("Playback could not begin:", error);
    });

    resizePostcardText();
})

deletePostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert("No postcard is currently selected.");
        return;
    }

    const confirmed = confirm("Are you sure you want to delete this postcard?");
    if (!confirmed) {
        return;
    }

    showLoading("Deleting postcard...");

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error("You must be logged in.");
        }

        // First, delete the actual postcard
        const { data: deletedPostcards, error: deleteError } = await supabaseClient
            .from("postcards")
            .delete()
            .eq("id", selectedPostcard.id)
            .eq("user_id", authData.user.id)
            .select("id");

        if (deleteError) {
            throw deleteError;
        }

        if (!deletedPostcards || deletedPostcards.length === 0) {
            throw new Error("No postcard was deleted. Check your DELETE policy.");
        }

        // Deleting a postcard does not mean deleting the image from Supabase storage
        // Added conditional for defensive programming reasons, just in case an edge case occurs where an image has no URL
        const imagePath = selectedPostcard.image_url ? selectedPostcard.image_url.split("/postcard-images/")[1] : null;

        if (imagePath) {
            const { error: storageError } = await supabaseClient.storage
                .from("postcard-images")
                .remove([imagePath]);

            if (storageError) {
                console.error("Postcard deleted, but image cleanup failed:", storageError);
            }
        }

        // Finally, clean everything up
        editPostcardOverlay.style.display = "none";
        selectedPostcard = null;

        const remainingPostcards = await loadPostcards(selectedLifeSegmentID);

        displayPostcards(remainingPostcards);
        await loadInventoryLifeSegments();
        alert("Postcard deleted successfully.");

    } catch (error) {
        console.error(error);
        alert("Could not delete postcard: " + error.message);

    } finally {
        hideLoading();
    }
});

downloadPostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert("No postcard is currently selected.")
        return;
    }

    showLoading("Preparing Download...")

    try {
        const canvas = await html2canvas(editPostcard, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });
        const link = document.createElement("a");
        link.download = "postcard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    } catch (error) {
        console.error(error);
        alert("Could not download postcard: " + error.message);
    } finally {
        hideLoading();
    }
})

sharePostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert("No postcard is currently selected.");
        return;
    }

    showLoading("Preparing Postcard...");

    try {
        const canvas = await html2canvas(editPostcard, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });

        const blob = await new Promise(function (resolve, reject) {
            canvas.toBlob(function(result) {
                if (!result) {
                    reject(new Error("Could not create postcard image."))
                    return;
                }
                
                resolve(result);
            }, "image/png");
        });

        const file = new File([blob], "postcard.png", {
            type: "image/png"
        });

        if (navigator.share && navigator.canShare && navigator.canShare({files: [file]})) {
            await navigator.share({
                title: "Postcards Home",
                text: "A postcard for you!",
                files: [file]
            });
        } else {
            const link = document.createElement("a");
            link.download = "postcard.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            
            alert("Sharing is not supported by this browser, so the postcard was downloaded instead.");

        }
    } catch (error) {
        if (error.name !== "AbortError") { // AbortError means that the user opened the share window then cancelled, so it's not the app's fault
            console.error(error);
            alert("Could not share postcard: " + error.message);
        }
    } finally {
        hideLoading();
    }
})

// Apply edited caption to the postcard preview
applyCaptionButton.addEventListener("click", function () {
    editCaptionPreview.textContent = captionEditorInput.value.trim();

    resizePostcardText();

    captionEditorOverlay.style.display = "none";
});

function resizePostcardText() {
    // Assume starting font size 11, and then shrink it gradually but never go below the minimum font size
    let fontSize = 11;
    const minimumFontSize = 4;

    editPostcardText.style.fontSize = fontSize + "px";

    while (fontSize > minimumFontSize) {
        // Measure the rectangle occupied by the text area
        const textAreaBox = editPostcardText.getBoundingClientRect();

        // Create a range (i.e. "highlighting" a part of the browser), which highlights everything inside the div editPostcardText
        const range = document.createRange();
        range.selectNodeContents(editPostcardText);

        // This highlights how much space the highlighted text actually ocupies
        const actualTextBox = range.getBoundingClientRect();

        const textFits =
            actualTextBox.bottom <= textAreaBox.bottom &&
            actualTextBox.right <= textAreaBox.right;

        if (textFits) {
            break;
        }

        fontSize -= 0.25;
        editPostcardText.style.fontSize =
            fontSize + "px";
    }

    console.log("Final font:", fontSize);
}


// Close without applying changes
closeCaptionEditorButton.addEventListener("click", function () {
    const confirmClose = window.confirm("Are you sure you want to discard your changes?")

    if (!confirmClose) {
        return;
    }

    captionEditorOverlay.style.display = "none";
});



// Load Profile Modal
const profileSettingsButton = document.getElementById("profileSettingsButton");
const profileSettingsOverlay = document.getElementById("profileSettingsOverlay");
const closeProfileSettingsButton = document.getElementById("closeProfileSettingsButton");
const profileFullNameInput = document.getElementById("profileFullNameInput");
const profileUsernameInput = document.getElementById("profileUsernameInput");
const profileLanguageSelect = document.getElementById("profileLanguageSelect");
const profileSettingsMessage = document.getElementById("profileSettingsMessage");
const saveProfileSettingsButton = document.getElementById("saveProfileSettingsButton");
const logoutButton = document.getElementById("logoutButton");
const deleteAccountButton = document.getElementById("deleteAccountButton");

function showProfileSettingsMessage(message, type) {
    profileSettingsMessage.style.display = "block";
    profileSettingsMessage.textContent = message;

    if (type === "error") {
        profileSettingsMessage.style.color = "red";
    } else {
        profileSettingsMessage.style.color = "green";
    }
}

async function loadProfileSettings() {
    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError) {
        throw authError;
    }

    if (!authData.user) {
        throw new Error("You must be logged in.");
    }

    const userID = authData.user.id;

    const { data: profileData, error: profileError } = await supabaseClient
            .from("profiles")
            .select("full_name, username, owned_collectibles")
            .eq("user_id", userID)
            .single();

    if (profileError) {
        throw profileError;
    }

    profileFullNameInput.value = profileData.full_name || "";
    profileUsernameInput.value = profileData.username || "";

    profileLanguageSelect.value = localStorage.getItem("preferredLanguage") || "en";
}

profileSettingsButton.addEventListener("click",async function() {
    profileSettingsMessage.style.display = "none";

    showLoading("Loading Profile Settings...");

    try {
        await loadProfileSettings();

        profileSettingsOverlay.style.display ="flex";
        closeProfileSettingsButton.focus();

    } catch (error) {
        console.error(error);
        alert("Could not load profile settings: " + error.message);

    } finally {
        hideLoading();
    }
});

// This helper function is here because there are several ways to close the modal
function closeProfileSettings() {
    profileSettingsOverlay.style.display = "none";
    profileSettingsMessage.style.display = "none";
}

closeProfileSettingsButton.addEventListener("click", closeProfileSettings);

profileSettingsOverlay.addEventListener("click", function(event) {
    if (event.target === profileSettingsOverlay) {
        closeProfileSettings();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && profileSettingsOverlay.style.display === "flex") {
        closeProfileSettings();
    }
});

saveProfileSettingsButton.addEventListener("click", async function() {
    const fullName = profileFullNameInput.value.trim();
    const username = profileUsernameInput.value.trim();
    const language = profileLanguageSelect.value;

    if (!fullName) {
        showProfileSettingsMessage("Full name cannot be empty.", "error");
        return;
    }

    if (!username) {
        showProfileSettingsMessage("Username cannot be empty.", "error");
        return;
    }

    saveProfileSettingsButton.disabled = true;
    showLoading("Saving Profile Settings...");

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();
        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error("You must be logged in.");
        }

        const userID = authData.user.id;

        const { data: updatedProfile, error: updateError } = await supabaseClient
            .from("profiles")
            .update({
                full_name: fullName,
                username: username
            })
            .eq("user_id", userID)
            .select("full_name, username")
            .single();

        if (updateError) {
            throw updateError;
        }

        // First save the preferred language in the broser's localStorage
        localStorage.setItem("preferredLanguage", language);

        showProfileSettingsMessage("Profile settings saved!", "success");

        console.log("Updated profile:", updatedProfile);

    } catch (error) {
        console.error(error);

        let errorMessage = "Could not save profile settings: " + error.message;

        if (error.code === "23505" || error.message.toLowerCase().includes("duplicate")) {
            errorMessage = "That username is already being used.";
        }

        showProfileSettingsMessage(errorMessage, "error");

    } finally {
        saveProfileSettingsButton.disabled = false;
        hideLoading();
    }
});

logoutButton.addEventListener("click", async function() {
    const confirmed = confirm("Are you sure you want to log out?");
    if (!confirmed) {
        return;
    }

    showLoading("Logging Out...")
    
    const {error} = await supabaseClient.auth.signOut();

    if (error) {
        showProfileSettingsMessage("Could not log out:" + error.message, "error");
    }

    window.location.href = "login.html";

})


// Profile Deletion Mechanisms
async function deleteUserPostcardImages(userID) {
    while (true) {
        const { data: files, error: listError } =await supabaseClient.storage
            .from("postcard-images")
            .list(userID, {
                limit: 100,
                offset: 0
            });

        if (listError) {
            throw listError;
        }

        if (!files || files.length === 0) {
            return;
        }

        const filePaths = files.map(function(file) {
            return `${userID}/${file.name}`;
        });

        const { error: removeError } = await supabaseClient.storage
            .from("postcard-images")
            .remove(filePaths);

        if (removeError) {
            throw removeError;
        }
    }
}

deleteAccountButton.addEventListener("click", async function() {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete your account?")

    if (!confirmDelete) {
        return;
    }

    const typedConfirmation = prompt("Type DELETE MY ACCOUNT PERMANENTLY to confirm.");

    if (typedConfirmation !== "DELETE MY ACCOUNT PERMANENTLY") {
        alert("Account Deletion Cancelled.");
        return;
    }

    const typedConfirmation2 = prompt("Deleting your account will permanently remove ALL postcards and life segments. This cannot be recovered. Some inventory items and account data may reamin temporarily before permanent deletion, but recovery is not guaranteed.\n\nType I CONFIRM I HAVE READ AND AGREE to confirm you have read, understand, and agree to this policy.")

    if (typedConfirmation2 !== "I CONFIRM I HAVE READ AND AGREE") {
        alert("Account Deletion Cancelled.");
        return;
    }

    deleteAccountButton.disabled = true;
    showLoading("Deleting account...");

    try {

        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error("You must be logged in.");
        }

        const userID = authData.user.id;
        
        await deleteUserPostcardImages(userID);

        const { error: postcardsError } = await supabaseClient
            .from("postcards")
            .delete()
            .eq("user_id", userID);
        
        if (postcardsError) {
            throw postcardsError;
        }

        const { error: segmentsError } = await supabaseClient
            .from("life_segments")
            .delete()
            .eq("user_id", userID);

        if (segmentsError) {
            throw segmentsError;
        }

        const { error: profileError } = await supabaseClient
            .from("profiles")
            .update({
                is_deleted: true,
                deletion_requested_at: new Date().toISOString()
            })
            .eq("user_id", userID);
        
        if (profileError) {
            throw profileError;
        }

        const { error: signOutError } = await supabaseClient.auth.signOut();

        if (signOutError) {
            throw signOutError;
        }
        
        localStorage.clear();
        alert("Your account has been scheduled for deletion. Although all postcards/life segments could not be recovered, please email zixuan.yang2018@gmail.com ASAP if you want to retrieve your account with inventory items.")
        window.location.href = "login.html";
        

    } catch (error) {
        console.error(error);
        alert("Could not delete account: " + error.message);
    } finally {
        deleteAccountButton.disabled = false;
        hideLoading();
    }

});

async function initializeInventory() {
    showLoading("Loading Inventory...");

    try {
        await loadInventoryLifeSegments();
        await loadInventoryStamps();
        await loadCollectibles();
    } finally {
        hideLoading();
    }
}

initializeInventory();
