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

const editPostcardOverlay = document.getElementById("editPostcardOverlay");
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
                showMessage(error.message, "error");

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
        .select("id, caption, image_url, location, postcard_date, created_at, stamp, mood, music_piece")
        .eq("life_segment_id", lifeSegmentID);

    if (postcardsError) {
        throw postcardsError;
    }

    return postcards;
    
}

function displayPostcards(postcardsData) {
    postcardGrid.innerHTML = "";

    for (const postcard of postcardsData) {
        const htmlTemplate = `
            <div class="inventory-postcard" data-postcard-id="${postcard.id}">
                <div class="postcard-photo-container">
                    <img class="postcard-photo" src="${postcard.image_url}">
                    <img class="postcard-stamp" src="${postcard.stamp}">
                </div>

                <div class="postcard-body">
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

            const selectedPostcard = postcardsData.find(function(postcard) {
                return postcard.id === postcardID;
            });

            editPostcardImage.src = selectedPostcard.image_url;
            editCaptionPreview.textContent = selectedPostcard.caption;
            editMusicPreview.textContent =
                `♫ Currently listening to: ♫\n${selectedPostcard.music_piece}`;
            editDatePreview.textContent = selectedPostcard.postcard_date;
            editLocationPreview.textContent = selectedPostcard.location;

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
        
        const htmlTemplate = `
        
            <div class="collectible-card">
                <img src="${collectible.image}" alt="${collectible.name}" class="collectible-image">
                <h3 class="collectible-title">${collectible.name}</h3>
                <p class="collectible-description">${collectible.description || ""}</p>
                <p class="collectible-category">${collectible.category}</p>
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
    editPostcardOverlay.style.display = "none";
})


/// POPUP FOR EDITING CAPTION ///
const editCaptionButton = document.getElementById("editCaptionButton");
const captionEditorOverlay = document.getElementById("captionEditorOverlay");
const captionEditorInput = document.getElementById("captionEditorInput");
const applyCaptionButton = document.getElementById("applyCaptionButton");
const closeCaptionEditorButton = document.getElementById("closeCaptionEditorButton");

editCaptionButton.addEventListener("click", function () {
    // Copy the current caption into the textarea
    captionEditorInput.value = editCaptionPreview.textContent;

    captionEditorOverlay.style.display = "flex";
    captionEditorInput.focus();
});

// Apply edited caption to the postcard preview
applyCaptionButton.addEventListener("click", function () {
    editCaptionPreview.textContent = captionEditorInput.value.trim();

    resizePostcardText();

    captionEditorOverlay.style.display = "none";
});

const editPostcardText =
    document.getElementById("editPostcardText");

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
