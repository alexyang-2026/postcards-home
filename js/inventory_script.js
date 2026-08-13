const inventorySidebar = document.getElementById("inventorySidebar");
const inventoryNavButtons = document.querySelectorAll(".inventory-nav-button");
const inventoryMainHeader = document.querySelector(".inventory-main-header");
const lifeSegmentGrid = document.querySelector(".life-segment-grid");

// Set up translation
const languageSelect = document.getElementById("languageSelect");

async function initializeInventoryTranslations() {

    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    
    await i18next.init({
        lng: savedLanguage,
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    ...inventoryTranslations.en.translation,
                    ...collectiblesTranslations.en.translation
                }
            },

            zh: {
                translation: {
                    ...inventoryTranslations.zh.translation,
                    ...collectiblesTranslations.zh.translation
                }
            },

            es: {
                translation: {
                    ...inventoryTranslations.es.translation,
                    ...collectiblesTranslations.es.translation
                }
            },

            fr: {
                translation: {
                    ...inventoryTranslations.fr.translation,
                    ...collectiblesTranslations.fr.translation
                }
            }
        }
    });

    applyInventoryTranslations();
    languageSelect.value = savedLanguage;
}

function applyInventoryTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function(element) {
        const key = element.dataset.i18n;
        element.textContent = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function(element) {
        const key = element.dataset.i18nAriaLabel;
        element.setAttribute("aria-label", i18next.t(key));
    });

    document.documentElement.lang = i18next.language;
}

languageSelect.addEventListener("change", async function() {
    const selectedLanguage = languageSelect.value;
    await i18next.changeLanguage(selectedLanguage);
    localStorage.setItem("preferredLanguage", selectedLanguage);
    applyInventoryTranslations();

    await loadInventoryLifeSegments();
    await loadInventoryStamps();
    await loadCollectibles();
});


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
        const postcardCount = postcardCounts[segment.id] || 0;

        const coverAlt = i18next.t("inventory.lifeSegments.coverAlt", {title: segment.title});

        const postcardCountText = i18next.t("inventory.lifeSegments.postcardCount", {count: postcardCount});
        const createdOnText = i18next.t("inventory.lifeSegments.createdOn", {date: segment.created_at.slice(0, 10)});

        const card = `
        <div class="life-segment" data-segment-id="${segment.id}" data-segment-title="${segment.title}">
            <img src="assets/images/life-segment-covers/${segment.cover_image}.svg" class="life-segment-cover" alt="${coverAlt}">

            <h3 class="life-segment-title">
                ${segment.title}
            </h3>

            <p class="life-segment-postcards">
                ${postcardCountText}
            </p>

            <p class="life-segment-date">
                ${createdOnText}
            </p>
        </div>`;
        
        lifeSegmentGrid.innerHTML += card;
    }

    const lifeSegmentCards = document.querySelectorAll(".life-segment");
    const lifeSegmentModalHeading = document.getElementById("lifeSegmentModalHeading");

    for (const card of lifeSegmentCards){

        card.addEventListener("click", async function() {

            try {
                showLoading(i18next.t("inventory.lifeSegments.loading"));

                selectedLifeSegmentID = card.dataset.segmentId;

                lifeSegmentModalHeading.textContent = i18next.t("inventory.lifeSegments.modalTitleWithName", {title: card.dataset.segmentTitle});

                const postcards = await loadPostcards(card.dataset.segmentId);
                displayPostcards(postcards);
                modalOverlay.style.display = "flex";
            
            } catch (error) {
                alert(error.message);
                console.log(error);

            } finally {
                hideLoading();
            }
            
        })
    }
}

chooseLifeSegmentImage.addEventListener("change", async function() {

    if (!selectedLifeSegmentID) {
        alert(i18next.t("inventory.lifeSegments.noneSelected"));
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
            throw new Error(i18next.t("inventory.lifeSegments.loginRequired"));
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
            throw new Error(i18next.t("inventory.lifeSegments.noUpdate"));
        }

        // Select the life segment currently on screen and change its image
        const selectedCard = document.querySelector(`.life-segment[data-segment-id="${selectedLifeSegmentID}"]`);
        selectedCard.querySelector(".life-segment-cover").src = `assets/images/life-segment-covers/${selectedCoverImage}.svg`;

        alert(i18next.t("inventory.lifeSegments.coverUpdated"));

    } catch (error) {
        console.error(error);
        alert(i18next.t("inventory.lifeSegments.coverUpdateError", { message: error.message }));
    }
})

// This function queries every postcard in the selected life segment and converts each public image URL into the storage path Supabase needs
async function getLifeSegmentImagePaths(lifeSegmentID, userID) {
    const { data: postcards, error } = await supabaseClient
        .from("postcards")
        .select("image_url")
        .eq("life_segment_id", lifeSegmentID)
        .eq("user_id", userID);

    if (error) {
        throw error;
    }

    return postcards
        .map(function(postcard) {
            if (!postcard.image_url) {
                return null;
            }

            return postcard.image_url.split("/postcard-images/")[1];
        })
        .filter(function(imagePath) {
            return imagePath !== null;
        });
}

deleteLifeSegmentButton.addEventListener("click", async function() {
    if (!selectedLifeSegmentID) {
        return;
    }

    const confirmed = confirm(
        i18next.t("inventory.lifeSegments.deleteConfirmation")
    );

    if (!confirmed) {
        return;
    }

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error(i18next.t("inventory.lifeSegments.loginRequired"));
        }

        const userID = authData.user.id;

        // Save the image paths before deleting the Life Segment and its postcards
        const imagePaths = await getLifeSegmentImagePaths(selectedLifeSegmentID, userID);

        const { error: deleteError } = await supabaseClient
            .from("life_segments")
            .delete()
            .eq("id", selectedLifeSegmentID)
            .eq("user_id", userID);
        
        if (deleteError) {
            throw deleteError;
        }

        // Remove the corresponding postcard images from Supabase Storage
        if (imagePaths.length > 0) {
            const { error: storageError } = await supabaseClient.storage
                .from("postcard-images")
                .remove(imagePaths);

            if (storageError) {
                console.error("Life Segment deleted, but image cleanup failed:", storageError);
            }
        }

        modalOverlay.style.display = "none";
        selectedLifeSegmentID = null;

        await loadInventoryLifeSegments();

    } catch (error) {
        console.error(error);
        alert(i18next.t("inventory.lifeSegments.deleteError", { message: error.message }));
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

        const caption = postcard.caption || i18next.t("inventory.postcards.noCaption");

        const musicText = postcard.music_piece ? `${i18next.t("inventory.postcards.listeningTo")}\n${postcard.music_piece}` : "";

        const htmlTemplate = `
            <div class="inventory-postcard" data-postcard-id="${postcard.id}" style="background-image: url('${backgroundImage}')">
                <div class="postcard-photo-container">
                    <img class="postcard-photo" src="${postcard.image_url}">
                    <img class="postcard-stamp" src="${postcard.stamp}">
                </div>

                <div class="postcard-body" style="color: ${postcardTextColor};">
                    <p class="postcard-caption">${caption}</p>
                    <p class="postcard-music">${musicText}</p>
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
            showLoading(i18next.t("inventory.postcards.opening"));

            try {
                const postcardID = card.dataset.postcardId;

                selectedPostcard = postcardsData.find(function(postcard) {
                    return postcard.id === postcardID;
                });

                if (!selectedPostcard) {
                    throw new Error(
                        i18next.t("inventory.postcards.notFound")
                    );
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
                    editMusicPreview.textContent =
                        i18next.t("inventory.postcards.listeningTo") + "\n" + selectedPostcard.music_piece;

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
                    showLoading(i18next.t("inventory.postcards.saving"));

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

                alert(i18next.t("inventory.postcards.openError", {message: error.message}));
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
        const stamp = stampDatabase[stampName];

        // Defensive programming mechanism to not crash the whole inventory when one stamp is not found
        if (!stamp) {
            console.warn("Stamp not found in stampDatabase:", stampName);
            continue;
        }
        
        const rarityText = i18next.t("inventory.stamps.rarity", {rarity: i18next.t(`inventory.rarities.${stampDatabase[stampName].rarity}`)});

        const htmlTemplate = `
            <div class="stamp-icon">
                <img src="${stampDatabase[stampName].image}" class="stamp-cover">
                <h3 class="stamp-title">${stampDatabase[stampName].name}</h3>
                <p class="stamp-rarity">${rarityText}</p>
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

    const { data: collectiblesData, error: collectiblesError } =
        await supabaseClient
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

        const translatedCollectible = i18next.t(
            `collectibles.${collectible.category}.${collectible.collectibleKey}`,
            { returnObjects: true }
        );

        if (!collectible) {
            console.warn("Collectible not found: ", collectibleID);
            continue;
        }

        let collectibleCategory = collectible.category;
        let collectibleCategoryBackgroundColor = "gold";
        
        if (collectible.category === "postcardBackgrounds") {
            collectibleCategory = i18next.t("inventory.collectibleCategories.postcardBackground");

        } else if (collectible.category === "wallpapers") {
            collectibleCategory = i18next.t("inventory.collectibleCategories.wallpaper");

            collectibleCategoryBackgroundColor = "limegreen";
        } else if (collectible.category === "exclusiveMusic") {
            collectibleCategory = i18next.t("inventory.collectibleCategories.exclusiveMusic");

            collectibleCategoryBackgroundColor = "orange";
        }

        const htmlTemplate = `
        
            <div class="collectible-card">
                <img src="${collectible.image}" alt="${translatedCollectible.name}" class="collectible-image">
                <h3 class="collectible-title">${translatedCollectible.name}</h3>
                <p class="collectible-description">${translatedCollectible.description || ""}</p>
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
});


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

function loadRandomMusicInEditor() {
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

    editMusicPreview.textContent = i18next.t("inventory.postcards.listeningTo") + "\n" + selectedMusicRecommendation.piece;

    editMusicPlayer.src = selectedMusicRecommendation.audio;
    editPostcardMusicControls.style.display = "inline-flex";
    editMusicPlayer.style.display = "block";
    rerollButton.style.display = "block";

    editMusicPlayer.play().catch(function(error) {
        console.warn("Playback could not begin:", error);
    });

    resizePostcardText();
}

moodSelect.addEventListener("change", loadRandomMusicInEditor);
rerollButton.addEventListener("click", loadRandomMusicInEditor);

deletePostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert(i18next.t("inventory.postcards.noneSelected"));
        return;
    }

    const confirmed = confirm(
        i18next.t("inventory.postcards.deleteConfirmation")
    );

    if (!confirmed) {
        return;
    }

    showLoading(i18next.t("inventory.postcards.deleting"));

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error(i18next.t("inventory.lifeSegments.loginRequired"));
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
            throw new Error(i18next.t("inventory.postcards.noneDeleted"));
        }

        // Deleting a postcard does not mean deleting the image from Supabase storage
        // Added conditional for defensive programming reasons, just in case an edge case occurs where an image has no URL
        const imagePath = selectedPostcard.image_url
            ? selectedPostcard.image_url.split("/postcard-images/")[1]
            : null;

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

        alert(i18next.t("inventory.postcards.deleteSuccess"));

    } catch (error) {
        console.error(error);

        alert(i18next.t("inventory.postcards.deleteError", {message: error.message}));

    } finally {
        hideLoading();
    }
});

downloadPostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert(i18next.t("inventory.postcards.noneSelected"));
        return;
    }

    showLoading(i18next.t("inventory.postcards.preparingDownload"));

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

        alert(i18next.t("inventory.postcards.downloadError", {message: error.message}));

    } finally {
        hideLoading();
    }
})

sharePostcardButton.addEventListener("click", async function() {
    if (!selectedPostcard) {
        alert(i18next.t("inventory.postcards.noneSelected"));
        return;
    }

    showLoading(
        i18next.t("inventory.postcards.preparingShare")
    );

    try {
        const canvas = await html2canvas(editPostcard, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });

        const blob = await new Promise(function (resolve, reject) {
            canvas.toBlob(function(result) {
                if (!result) {
                    reject(
                        new Error(i18next.t("inventory.postcards.imageCreationError"))
                    );

                    return;
                }
                
                resolve(result);
            }, "image/png");
        });

        const file = new File([blob], "postcard.png", {
            type: "image/png"
        });

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({files: [file]})
        ) {
            await navigator.share({
                title: i18next.t("inventory.postcards.shareTitle"),
                text: i18next.t("inventory.postcards.shareText"),
                files: [file]
            });

        } else {
            const link = document.createElement("a");
            link.download = "postcard.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            
            alert(i18next.t("inventory.postcards.shareUnsupported"));
        }

    } catch (error) {
        if (error.name !== "AbortError") {
            // AbortError means that the user opened the share window then cancelled,
            // so it's not the app's fault
            console.error(error);

            alert(i18next.t("inventory.postcards.shareError", {message: error.message}));}

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
        editPostcardText.style.fontSize = fontSize + "px";
    }

    //console.log("Final font:", fontSize);
}


// Close without applying changes
closeCaptionEditorButton.addEventListener("click", function () {
    const confirmClose = window.confirm(i18next.t("inventory.editor.discardConfirmation"));

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
        throw new Error(i18next.t("inventory.profile.loginRequired"));
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

profileSettingsButton.addEventListener("click", async function() {
    profileSettingsMessage.style.display = "none";

    showLoading(i18next.t("inventory.profile.loading"));

    try {
        await loadProfileSettings();

        profileSettingsOverlay.style.display ="flex";
        closeProfileSettingsButton.focus();

    } catch (error) {
        console.error(error);
        alert(i18next.t("inventory.profile.loadError", {message: error.message}));

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
        showProfileSettingsMessage(i18next.t("inventory.profile.fullNameRequired"), "error");
        return;
    }

    if (!username) {
        showProfileSettingsMessage(i18next.t("inventory.profile.usernameRequired"), "error");
        return;
    }

    saveProfileSettingsButton.disabled = true;
    showLoading(i18next.t("inventory.profile.saving"));

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error(i18next.t("inventory.profile.loginRequired"));
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

        localStorage.setItem("preferredLanguage", language);

        showProfileSettingsMessage(i18next.t("inventory.profile.saved"), "success");

        console.log("Updated profile:", updatedProfile);

    } catch (error) {
        console.error(error);

        let errorMessage = i18next.t("inventory.profile.saveError", {
            message: error.message
        });

        if (error.code === "23505" || error.message.toLowerCase().includes("duplicate")) {
            errorMessage = i18next.t("inventory.profile.usernameTaken");
        }

        showProfileSettingsMessage(errorMessage, "error");

    } finally {
        saveProfileSettingsButton.disabled = false;
        hideLoading();
    }
});

logoutButton.addEventListener("click", async function() {
    const confirmed = confirm(i18next.t("inventory.profile.logoutConfirmation"));

    if (!confirmed) {
        return;
    }

    showLoading(i18next.t("inventory.profile.loggingOut"));
    
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        showProfileSettingsMessage(i18next.t("inventory.profile.logoutError", {
            message: error.message
        }), "error");

        return;
    }

    window.location.href = "login.html";
});


// Profile Deletion Mechanisms
async function deleteUserPostcardImages(userID) {
    while (true) {
        const { data: files, error: listError } = await supabaseClient.storage
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
    const confirmDelete = window.confirm(i18next.t("inventory.accountDeletion.firstConfirmation"));

    if (!confirmDelete) {
        return;
    }

    const typedConfirmation = prompt(i18next.t("inventory.accountDeletion.firstPrompt"));

    if (typedConfirmation !== i18next.t("inventory.accountDeletion.firstPhrase")) {
        alert(i18next.t("inventory.accountDeletion.cancelled"));
        return;
    }

    const typedConfirmation2 = prompt(i18next.t("inventory.accountDeletion.secondPrompt"));

    if (typedConfirmation2 !== i18next.t("inventory.accountDeletion.secondPhrase")) {
        alert(i18next.t("inventory.accountDeletion.cancelled"));
        return;
    }

    deleteAccountButton.disabled = true;
    showLoading(i18next.t("inventory.accountDeletion.deleting"));

    try {
        const { data: authData, error: authError } = await supabaseClient.auth.getUser();

        if (authError) {
            throw authError;
        }

        if (!authData.user) {
            throw new Error(i18next.t("inventory.profile.loginRequired"));
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
        alert(i18next.t("inventory.accountDeletion.scheduled"));
        window.location.href = "login.html";
        
    } catch (error) {
        console.error(error);
        alert(i18next.t("inventory.accountDeletion.error", { message: error.message }));
    } finally {
        deleteAccountButton.disabled = false;
        hideLoading();
    }
});

async function initializeInventory() {
    showLoading(i18next.t("inventory.loading.inventory"));

    try {
        await loadInventoryLifeSegments();
        await loadInventoryStamps();
        await loadCollectibles();
    } finally {
        hideLoading();
    }
}

async function initializeInventoryPage() {
    try {
        await initializeInventoryTranslations();
        await initializeInventory();
    } catch (error) {
        console.error("Could not initialize inventory page:", error);
    }
}

initializeInventoryPage();
