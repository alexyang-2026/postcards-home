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

const chooseLifeSegmentImageButton = document.getElementById("chooseLifeSegmentImageButton");
const deleteLifeSegmentButton = document.getElementById("deleteLifeSegmentButton");
let seletedLifeSegmentID = null;

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
    const { data: authData } = await supabaseClient.auth.getUser();

    if (!authData.user) {
        return;
    }

    const userID = authData.user.id;

    // Get the life segments
    const { data: lifeSegments, error } = await supabaseClient
        .from("life_segments")
        .select("id, title, created_at")
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
        <img src="assets/images/princeton-stamp.png" class="life-segment-cover">

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
                selectedLifeSegmentID = card.dataset.segmentId;
                lifeSegmentModalHeading.textContent = `View Postcards in ${card.dataset.segmentTitle}`;
                const postcards = await loadPostcards(card.dataset.segmentId);
                displayPostcards(postcards);
                modalOverlay.style.display = "flex";
            
            } catch (error) {
                showMessage(error.message, "error");
            }
            
        })
    }


}

chooseLifeSegmentImageButton.addEventListener("click", function() {
    
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
        card.addEventListener("click", function() {
            const postcardID = card.dataset.postcardId;

            const selectedPostcard = postcardsData.find(function(postcard) {
                return postcard.id === postcardID;
            })

            editPostcardImage.src = selectedPostcard.image_url;
            editCaptionPreview.textContent = selectedPostcard.caption;
            editMusicPreview.textContent = `♫ Currently listening to: ♫ \n${selectedPostcard.music_piece}`;

            editPostcardOverlay.style.display = "flex";
        })
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
        .eq("user_id", userID);
    
        if (collectiblesError) {
            console.error(collectiblesError);
            return;
        }
    
    for (const collectibleName of collectiblesData[0].owned_collectibles) {
        const htmlTemplate = `
            `;

        collectiblesGrid.innerHTML += htmlTemplate;
    }
}



const closeLifeSegmentModalButton = document.getElementById("closeLifeSegmentModalButton");
closeLifeSegmentModalButton.addEventListener("click", function(){
    modalOverlay.style.display = "none";
});

const closeEditPostcardButton = document.getElementById("closeEditPostcardButton");
closeEditPostcardButton.addEventListener("click", function() {
    editPostcardOverlay.style.display = "none";
})


loadInventoryLifeSegments();
loadInventoryStamps();
loadCollectibles();
