const mainPageTitle = document.getElementById("title");
const mainPageSubtitle = document.getElementById("subtitle");
const languageControls = document.getElementById("languageControls");
const languageSelect = document.getElementById("languageSelect");
const stepLabels = document.querySelectorAll(".stepLabel");
const stepArrows = document.querySelectorAll(".stepArrow");
const footer = document.getElementById("footer");

// creates a variable called photoInput that is unchangeable
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

const captionInput = document.getElementById("captionInput");
const captionPreview = document.getElementById("captionPreview");

const stampSelect = document.getElementById("stampSelect");
const stampPreview = document.getElementById("stampPreview");

const loginButton = document.getElementById("loginButton")

const shareButton = document.getElementById("shareButton");

const statusMessage = document.getElementById("statusMessage");

let currentMusicRecommendation = null; // variable to store the music piece's title so it can be saved
const moodSelect = document.getElementById("moodSelect");
const musicPlayerRow = document.querySelector(".musicPlayerRow");
const musicPlayer = document.getElementById("musicPlayer");
const musicMessage = document.getElementById("musicMessage");
musicPlayer.style.display = "none";
musicMessage.style.display = "none";

const musicPlayPauseButton = document.getElementById("musicPlayPauseButton");
musicPlayPauseButton.style.display = "none";
const musicRerollButton = document.getElementById("musicRerollButton");
musicRerollButton.style.display = "none";

const locationButton = document.getElementById("locationButton");
const locationPreview = document.getElementById("locationPreview");

const resetPostcardButton = document.getElementById("resetPostcardButton");

const lifeSegmentSelect = document.getElementById("lifeSegmentSelect");

/// DATE AND LOCATION ///
const datePreview = document.getElementById("datePreview");
datePreview.textContent = new Date().toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric"
});


/// DOWNLOAD POSTCARD ///
const downloadButton = document.getElementById("downloadButton");
const postcard = document.getElementById("postcard");

const exportButton = document.querySelector("#exportButton");
const exportMenu = document.querySelector("#exportMenu");

exportButton.addEventListener("click", function(event) {
    event.stopPropagation();

    exportMenu.classList.toggle("open");

    const isOpen = exportMenu.classList.contains("open");
    exportButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", function() {
    exportMenu.classList.remove("open");
});


/// USER LOGIN FEATURES ///
const loggedInUserInfo = document.getElementById("loggedInUserInfo");
const welcomeMessage = document.getElementById("welcomeMessage");
welcomeMessage.style.display = "none";

let imageFailMessage = "Download Failed. You didn't select or take a photo, it's not a postcard without a photo 🤣"
let captionFailMessage = "Download Failed. You didn't write a caption! Go write a caption 🙂"

let loggedInUserID = null;


/// LIFE SEGMENT FUNCTIONALITY ///
lifeSegmentSelect.innerHTML = "";
const option = document.createElement("option");
option.value = "";
option.textContent = i18next.t("main.lifeSegments.noSegments");
lifeSegmentSelect.appendChild(option);
lifeSegmentSelect.disabled = true;

const createLifeSegmentButton = document.getElementById("createLifeSegmentButton");

async function loadLifeSegments (userID) {
    const { data, error } = await supabaseClient
        .from("life_segments")
        .select("id, title")
        .eq("user_id", userID);

    // console.log("Life segments: ", data)
    // console.log("Life segment error: ", error)

    if (error) {
        console.log(error);
        return;
    }

    if (data.length === 0) {
        lifeSegmentSelect.innerHTML = `<option value="">${i18next.t("main.lifeSegments.noSegments")}</option>`;
        lifeSegmentSelect.disabled = true;
        return;
    }

    lifeSegmentSelect.disabled = false;
    lifeSegmentSelect.innerHTML = `<option value="">${i18next.t("main.lifeSegments.addPostcard")}</option>`;

    for (const segment of data){
        const option = document.createElement("option");
        option.value = segment.id;
        option.textContent = segment.title;
        lifeSegmentSelect.appendChild(option);
    }
}


// Function to Load The User's Owned Stamps
async function loadOwnedStamps(userID) {
    const selectedStamp = stampSelect.value;

    const { data: profileData, error: profileError } = await supabaseClient
        .from("profiles")
        .select("owned_stamps")
        .eq("user_id", userID)
        .single();

    if (profileError) {
        console.error(profileError);
        return;
    }

    // Re-create the inner HTML, because we don't want duplicate stamps: I have already made the music/home/travel/Canada stamps free for users who were logged out
    stampSelect.innerHTML = ` <option value="">${i18next.t("main.stamps.select")}</option>`;

    const ownedStamps = profileData.owned_stamps || [];
    const stampTranslationKeys = {
        music: "music",
        home: "home",
        travel: "travel",
        canada: "canada",
        princeton: "princeton",
        washington_gold: "washington_gold",
        piano_stamp: "piano",
        tchaikovsky_stamp: "tchaikovsky",
        camera_stamp: "camera",
        russian_space_stamp: "russian_space",
        sakura_stamp: "sakura",
        sunset_stamp: "sunset",
    };

    for (const stampID of ownedStamps) {
        const stamp = stampDatabase[stampID];

        if (!stamp) {
            console.warn("Stamp not found:", stampID);
            continue;
        }

        const option = document.createElement("option");
        const translationKey = stampTranslationKeys[stampID];

        option.value = stamp.image;
        option.textContent = translationKey
            ? i18next.t("main.stamps." + translationKey, {defaultValue: stamp.name})
            : stamp.name;

        stampSelect.appendChild(option);
    }

    // Keep the user's current selection when rebuilding after a language change.
    if (selectedStamp) {
        stampSelect.value = selectedStamp;
    }
}

// Function for the user to unlock NEW stamps
async function unlockStamp(userID, stampID) {
    if (!userID) {
        throw new Error(i18next.t("main.messages.loginRequired"));
    }

    const stamp = stampDatabase[stampID];

    if (!stamp) {
        throw new Error("Stamp not found: " + stampID);
    }

    const { data: profileData, error: profileError } =
        await supabaseClient
            .from("profiles")
            .select("owned_stamps")
            .eq("user_id", userID)
            .single();

    if (profileError) {
        throw profileError;
    }

    const ownedStamps = profileData.owned_stamps || []; // Because I have made the Supabase default value for profileData.owned_stamps contain 4 stamps, there should not be an empty or null value

    // Do not add the same stamp twice
    if (ownedStamps.includes(stampID)) {
        return false;
    }

    ownedStamps.push(stampID);

    const { error: updateError } = await supabaseClient
        .from("profiles")
        .update({
            owned_stamps: ownedStamps
        })
        .eq("user_id", userID);

    if (updateError) {
        throw updateError;
    }

    await loadOwnedStamps(userID);

    alert("🎉 You unlocked " + stamp.name + "!");

    launchFireworksCelebration();

    return true;
}


// Modal / Pop-up Window //
const lifeSegmentTitleInput = document.getElementById("lifeSegmentTitleInput");
const lifeSegmentDescriptionInput = document.getElementById("lifeSegmentDescriptionInput");
const lifeSegmentStatusMessage = document.getElementById("lifeSegmentStatusMessage");
lifeSegmentStatusMessage.style.display = "none";
const modalOverlay = document.getElementById("modalOverlay");
const saveLifeSegmentButton = document.getElementById("saveLifeSegmentButton");
const closeLifeSegmentModal = document.getElementById("closeLifeSegmentModal");
const xButton_LifeSegmentModal = document.getElementById("xButton_LifeSegmentModal");

createLifeSegmentButton.addEventListener("click", function() {
    modalOverlay.style.display = "flex";
    modalOverlay.style.alignItems = "center";
    modalOverlay.style.justifyContent = "center";
});

closeLifeSegmentModal.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});

xButton_LifeSegmentModal.addEventListener("click", function() {
    modalOverlay.style.display = "none";
})

saveLifeSegmentButton.addEventListener("click", async function() {
    const title = lifeSegmentTitleInput.value.trim();
    const description = lifeSegmentDescriptionInput.value.trim();

    if (title === "") {
        lifeSegmentStatusMessage.style.display = "block";
        lifeSegmentStatusMessage.style.color = "red";
        lifeSegmentTitleInput.style.borderBlockColor = "red";
        lifeSegmentStatusMessage.textContent = "Your Title Cannot Be Empty."
        return;

    }

    const { data:authData, error:authError } = await supabaseClient.auth.getUser();

    if (authError || !authData?.user) {
        lifeSegmentStatusMessage.style.display = "block";
        lifeSegmentStatusMessage.style.color = "red";
        lifeSegmentStatusMessage.textContent = i18next.t("main.messages.loginRequired");
        return;
    }


    const userID = authData.user.id;

    const { error: insertError } = await supabaseClient
        .from("life_segments")
        .insert({
            user_id: userID,
            title: title,
            description: description,
            // Default image insert is sunrise_over_water
        });

    if (insertError) {
        lifeSegmentStatusMessage.style.display = "block";
        lifeSegmentStatusMessage.style.color = "red";
        lifeSegmentStatusMessage.textContent = insertError.message;
        return;
    }

    lifeSegmentStatusMessage.style.display = "block";
    lifeSegmentStatusMessage.style.color = "green";
    lifeSegmentStatusMessage.textContent = i18next.t("main.lifeSegments.createSuccess");

    // If this is the first life segment then unlock the fireworks postcard background
    const unlocked = await unlockCollectible(userID, "fireworks", ownedCollectibles);

    if (unlocked) {
        await loadCollectibleDropdowns();
    }

    await loadLifeSegments(userID);
})


const toInventoryButton = document.getElementById("toInventoryButton");

toInventoryButton.addEventListener("click", function() {
    window.location.href = "inventory.html"
})




// Helper function to show success or fail
function showMessage(message, error_or_success) {
    statusMessage.style.display = "block";
    statusMessage.style.textAlign = 'center';
    if (error_or_success === "error"){
        statusMessage.style.color = "red";
    } else if (error_or_success === "waiting"){
        statusMessage.style.color = "gold";
    } else {
        statusMessage.style.color = "green";
    }
    statusMessage.textContent = message;
}

// Launch confetti
function launchConfetti(confetti_duration, particle_count) {
    // confetti_duration in milliseconds
    // Date.now() gives the current time as a big number in milliseconds
    const end = Date.now() + confetti_duration;
    
    // setInterval for running this function repeatedly every certain number of milliseconds
    const interval = setInterval(function() {
        
        // constantly check if the current time has passed the end time. If yes, the confetti should stop
        if (Date.now() > end) {
            clearInterval(interval); // stop the confetti
            return;
        }

        // call the confetti library function
        confetti({
            particleCount: particle_count,
            startVelocity: 15,
            spread:180,           // how spread out the confetti is
            origin: {
                x: Math.random(), // start from a random place on screen
                y: -0.1           // start slightly above the screen
            }
        });
    }, 100); // The 100 means "run this every 100 milliseconds." It's for setInterval()
}



// Listens for when the user selects a new file — i.e. the "change" event
photoInput.addEventListener("change", function() {

    // Check if the status message has an error, if yes, clear it
    if (statusMessage.textContent === imageFailMessage) {
        statusMessage.textContent = "";
        statusMessage.style.display = "none";
    }

    // Gets the selected files, takes in the first one, and stores it in the variable "file"
    const file = photoInput.files[0];

    // Check if a file was actually selected. If not, stop the function
    if (!file) {
        return;
    }
    
    // Creates a temporary URL for the selected image and sets the image preview's source to that URL. This causes the image to appear on the page.
    photoPreview.src = URL.createObjectURL(file);
});

captionInput.addEventListener("input", function() {

    if (statusMessage.textContent === captionFailMessage){
        statusMessage.textContent = "";
        statusMessage.style.display = "none";
    }

    // Update the caption preview as the user inputs stuff
    captionPreview.textContent = captionInput.value || i18next.t("main.postcard.captionPlaceholder");
    resizeMainPostcardText();
});

// Security functions to check whether there's a photo or a caption
function checkPhoto(){
    if (!photoInput.files[0]){
        showMessage(imageFailMessage, "error");
        return false;
    }

    return true;
}

function checkCaption(){
    if (captionInput.value.trim() === "") { // If the user hasn't typed anything yet
        showMessage(captionFailMessage, "error");
        return false;
    }

    return true;
}

downloadButton.addEventListener("click", function() {

    if (!checkPhoto()){
        return;
    }

    if (!checkCaption()){
        return;
    }

    // takes a screenshot-like capture of the postcard element and returns a generated canvas. The (canvas) is the captured postcard image.
    html2canvas(postcard, {
        useCORS: true, // CORS = cross-origin resource sharing: allows browser-based scripts to securely request the resources, helps prevent canvas from tainting
        allowTaint: true // allow tainted local images to compile into canvas layout
    }).then(async function (canvas){

        // creates a temporary download link
        const link = document.createElement("a");

        // set the downloaded filename
        link.download = "postcard.png";

        // converts the canvas into a PNG image URL
        link.href = canvas.toDataURL("image/png");

        // clicks the temporary link and starts the download
        link.click();

        // Sets the status message
        statusMessage.style.display = "block";
        statusMessage.style.color = "green";
        showMessage(i18next.t("main.messages.downloadSuccess"), "success");
        await tryUnlockRandomChopinNocturne(loggedInUserID);
        launchConfetti(3000, 10);
    });
});

stampSelect.addEventListener("change", function() {

    //console.log("selected stamp:", stampSelect.value);

    if (stampSelect.value === ""){
        stampPreview.style.display = "none";
        stampPreview.removeAttribute("crossorigin");
        stampPreview.src = "";
    
    }
    else {
        stampPreview.style.display = "block";
        stampPreview.crossOrigin = "anonymous"; // tells the browser to request standard permission so it doesn't flag stamp as unsafe
        stampPreview.src = stampSelect.value;   // tells the image element on screen which file path to display
    }
});

shareButton.addEventListener("click", function() {

    if (!checkPhoto()){
        return;
    }

    if (!checkCaption()){
        return;
    }

    // convert the HTML postcard and convert it into a canvas
    html2canvas(postcard, {
        useCORS: true,
        allowTaint: true
    }).then(function(canvas) {
        // converts the canvas into actual image data. blob = binary large object that stores the PNG file data without a filename yet
        canvas.toBlob(function(blob) {
            // creates a real file object, like a file on a computer, with filename postcard.png and image type PNG
            const file = new File([blob], "postcard.png", {
                type: "image/png"
            });
            
            // If the browser supports sharing to other apps
            if (navigator.canShare && navigator.canShare({files: [file] })) {

                // asks the operating system to ope the native share sheet and show share menu
                navigator.share ({
                    title: "Postcards Home",
                    text: "A Postcard For You!",
                    files: [file]
                })

                showMessage(i18next.t("main.messages.shareSuccess"), "success");
                launchConfetti(3000, 10)
            } 
            else {
                showMessage(i18next.t("main.messages.shareUnsupported"), "error");

                const link = document.createElement("a");
                link.download = "postcard.png";
                link.href = canvas.toDataURL("image/png");
                link.click();


            }
            
        });
    });
});

function loadRandomMusic() {
    const selectedMood = moodSelect.value;
    
    if (selectedMood === "") {
        musicPlayer.src = "";
        musicPlayer.style.display = "none";
        musicPlayerRow.style.display = "none";
        musicPlayPauseButton.style.display = "none";
        musicRerollButton.style.display = "none";
        return;
    }
    
    let recommendationsArray = [];

    // Exclusive Chopin Nocturnes
    if (selectedMood === "exclusive_nocturnal") {
        recommendationsArray = ownedCollectibles
            .map(function (collectibleID) {
                return findCollectibleByID(collectibleID);
            })
            .filter(function (collectible) {
                return (collectible && collectible.category === "exclusiveMusic" && collectible.id.startsWith("chopin_nocturne") && collectible.audio);
            })
            .map(function (collectible) {
                return {
                    piece: collectible.name,
                    composer: "Frédéric Chopin",
                    audio: collectible.audio
                }
            })
    } else if (selectedMood === "exclusive_goldberg") {
        recommendationsArray = ownedCollectibles
            .map(function (collectibleID) {
                return findCollectibleByID(collectibleID);
            })
            .filter(function (collectible) {
                return (collectible && collectible.category === "exclusiveMusic" && collectible.id.startsWith("bach_goldberg") && collectible.audio);
            })
            .map(function (collectible) {
                return {
                    piece: collectible.name,
                    composer: "Johann Sebastian Bach",
                    audio: collectible.audio
                }
            })
    } else {
        recommendationsArray = musicDatabase[selectedMood] || [];
    }

    if (recommendationsArray.length === 0) {
        console.warn("No playable music found for:", selectedMood);

        currentMusicRecommendation = null;
        musicPlayer.style.display = "none";
        musicMessage.style.display = "none";
        musicPlayerRow.style.display = "none";
        musicPlayPauseButton.style.display = "none";
        musicRerollButton.style.display = "none";

        return;
    }

    const randomIndex = Math.floor(Math.random() * recommendationsArray.length);
    // Math.random() creates a random number between 0-1, so we multiply by the array length to get a random number between 0-(last index of the array) rounded down
    // Example: if the array length was 2, then Math.random() * recommendationsArray.length will give us a number from 0 <= x < 2, where 0-0.999999... --> index 0, and 1-1.999999.... --> index 1 (the last index of the array)

    currentMusicRecommendation = recommendationsArray[randomIndex];

    musicPlayer.style.display = "block";
    musicPlayerRow.style.display = "flex";
    musicPlayPauseButton.style.display = "block";
    musicRerollButton.style.display = "block";

    // Now play the music file which is stored in "recommendation.audio"
    musicMessage.style.display = "block" // show the music message because we hid it initially
    musicMessage.textContent = "♫ Currently listening to: ♫\n" + currentMusicRecommendation.piece;
    musicPlayer.src = currentMusicRecommendation.audio;
    musicPlayer.play().catch(function (error) {
        console.warn("Automatic music playback was blocked: ", error);
    })

    resizeMainPostcardText();
}


moodSelect.addEventListener("change", loadRandomMusic);
musicPlayPauseButton.addEventListener("click", function() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        musicPlayPauseButton.textContent = "⏸️";
    } else {
        musicPlayer.pause();
        musicPlayPauseButton.textContent = "▶️";
    }
});
musicRerollButton.addEventListener("click", loadRandomMusic);

locationButton.addEventListener("click", function(){
    getLocation(locationPreview);
    resizeMainPostcardText();
});

function updateDate() {
    // We need locales in order to translate our date
    const locales = {
        en: "en-US",
        zh: "zh-CN",
        fr: "fr-FR",
        ja: "ja-JP",
        es: "es-ES",
        de: "de-DE"
    };

    const locale = locales[i18next.language] || "en-US";

    datePreview.textContent = new Date().toLocaleDateString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    resizeMainPostcardText();
}

resetPostcardButton.addEventListener("click", function() {

    const confirmed = confirm(
        "Are you SURE you want to RESET your postcard?"
    );

    if (!confirmed){
        return;
    }

    photoPreview.src = "assets/images/postcard-placeholder.png";
    photoInput.value = "";

    captionInput.value = "";
    captionPreview.textContent = i18next.t("main.postcard.captionPlaceholder");

    stampSelect.value = "";
    stampPreview.src = "";
    stampPreview.style.display = "none";

    moodSelect.value = "";
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    musicPlayer.removeAttribute("src"); // No audio
    musicPlayer.load();
    musicPlayer.style.display = "none";
    musicPlayerRow.style.display = "none";
    musicPlayPauseButton.style.display = "none";
    musicRerollButton.style.display = "none";

    musicMessage.textContent = "";
    musicMessage.style.display = "none";

    locationPreview.textContent = "";
    locationPreview.style.display = "none";
    statusMessage.style.display = "none";
    statusMessage.textContent = "";



    updateDate();

    showMessage(i18next.t("main.messages.postcardReset"), "success");
});

// Login Button Event Listener
loginButton.addEventListener("click", async function() {

    const { data } = await supabaseClient.auth.getUser();

    if (data.user) {
        await supabaseClient.auth.signOut();
        window.location.href = "login.html"
    } else {
        window.location.href = "login.html";
    }
});


async function checkLoggedInUser() {
    const { data: authData, error:authError } = await supabaseClient.auth.getUser();

    // Check if logged in user exists first
    if (authError || !authData.user){
        loggedInUserID = null; // reset the global variable if not logged in
        loginButton.textContent = i18next.t("main.actions.login");
        loginButton.style.display = "block";
        return
    }

    const userID = authData.user.id;
    loggedInUserID = userID; // Update this global variable

    const { data: profileData, error: profileError } = await supabaseClient
        .from("profiles")
        .select("full_name")
        .eq("user_id", userID)
        .maybeSingle();

    loginButton.textContent = i18next.t("main.actions.logout");
    welcomeMessage.style.display = "block";
    welcomeMessage.textContent = "Welcome, " + profileData.full_name + "!";

    await loadLifeSegments(userID);
    await loadOwnedStamps(userID);
    await loadCollectibleDropdowns();
}


// Save image to Supabase Storage
async function uploadPostcardImage(photoFile, userID) {
    const imageID = crypto.randomUUID(); // generate a random UUID for the postcard file name
    const filePath = `${userID}/${imageID}.png`;

    const { data, error } = await supabaseClient.storage
        .from("postcard-images")
        .upload(filePath, photoFile)

    if (error) {
        showMessage(error.message, "error");
        console.error(error);
        throw error; // stop this function, but also tell the caller something went wrong. We do not want to insert a database row if the image upload failed

    }

    const { data: publicUrlData } = supabaseClient.storage
        .from("postcard-images")
        .getPublicUrl(filePath);

    const imageUrl = publicUrlData.publicUrl;
    return imageUrl;
}

// Function to Compress Image
async function compressImage(file) {
    // Turn the uplaoded image into something the browser can draw
    const imageBitmap = await createImageBitmap(file);
    
    // Create a drawing surface
    const canvas = document.createElement("canvas");
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;

    const context = canvas.getContext("2d");
    context.drawImage(imageBitmap, 0, 0); // draw the original photo into the canvas. the (0, 0) means start drawing at x-coordinate 0 and y-coordinate 0.

    // The blob takes the browser time to produce, so we put it inside of a Promise
    return new Promise(function(resolve, reject) {
        // When the compressed image is ready, canvas.toBlob will call the function below
        canvas.toBlob(
            function(blob) {
                if (!blob) {
                    reject(new Error("Image compression failed.")); 
                    return;
                }

                resolve(blob); // final value of the Promise
            },
            "image/jpeg", // second argument to canvas.toBlob: it is the type of image. We use JPEG because it is a lossy compression format that can throw away tiny details humans won't notice.
            0.75          // third argument to canvas.toBlob: it refers to the quality: use approx. 75% JPEG quality.
        );
    });

}


// Save postcard to life segment
async function savePostcardToLifeSegment(lifeSegmentID, lifeSegmentName) {
    // First, check the photo
    if (!checkPhoto()) {
        showMessage(i18next.t("main.messages.photoRequired"), "error");
        return;
    }

    // Next, check the caption
    if (!checkCaption()) {
        showMessage(i18next.t("main.messages.captionRequired"), "error");
        return;
    }

    showMessage(i18next.t("main.messages.saving"), "waiting")

    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError || !authData.user) {
        showMessage(i18next.t("main.messages.loginRequired"), "error");
        return;
    }

    const userID = authData.user.id;
    const caption = captionInput.value.trim();
    const location = locationPreview.textContent.trim();
    const stamp = stampSelect.value || null;
    const postcardDate = new Date().toISOString().slice(0, 10);
    const mood = moodSelect.value || null;
    const music = currentMusicRecommendation ? currentMusicRecommendation.piece : null;
    const postcardBackground = postcardBackgroundSelect.value || "default";

    try {
        console.log("Original size:", photoInput.files[0].size);
        const compressedImage = await compressImage(photoInput.files[0])
        console.log("Compressed size:", compressedImage.size);

        const imageUrl = await uploadPostcardImage(compressedImage, userID);
        const { error: insertError } = await supabaseClient
            .from("postcards")
            .insert({
                user_id: userID,
                life_segment_id: lifeSegmentID,
                caption: caption,
                location: location,
                stamp: stamp,
                mood: mood,
                music_piece: music,
                image_url: imageUrl,
                postcard_date: postcardDate,
                postcard_background: postcardBackground
            });
        
        if (insertError) {
            throw insertError;
        }

        showMessage(i18next.t("main.messages.saveToLifeSegmentSuccess") + lifeSegmentName + "!", "success");
        lifeSegmentSelect.value = ""; // this prevents duplicate photo saves

        ///// SECTION TO UNLOCK COLLECTIBLES /////
        let unlockedSomething = false;

        // Bach's Goldberg Variations (1-in-8 chance, awarded sequentially)
        if (await tryUnlockNextBachGoldbergCollectible(userID)) {
            unlockedSomething = true;
        }

        // Sakura
        if (!ownedCollectibles.includes("sakura")) {
            await unlockCollectible(userID, "sakura", ownedCollectibles);
            await unlockStamp(userID, "sakura_stamp");
            unlockedSomething = true;
        }

        const time = getCurrentTimeInfo();

        // Dawn
        if (!ownedCollectibles.includes("dawn") && time.totalMinutes < 7 * 60) {
            await unlockCollectible(userID, "dawn", ownedCollectibles);
            unlockedSomething = true;
        }

        // Dawn wallpaper
        if (!ownedCollectibles.includes("dawnwallpaper") && time.totalMinutes < 7 * 60) {
            await unlockCollectible(userID, "dawnwallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        // Starry Night
        if (!ownedCollectibles.includes("starrynight") && time.totalMinutes >= 20 * 60) {
            await unlockCollectible(userID, "starrynight", ownedCollectibles);
            unlockedSomething = true;
        }

        // Starry Night wallpaper
        if (!ownedCollectibles.includes("starrynightwallpaper") && time.totalMinutes >= 21 * 60) {
            await unlockCollectible(userID, "starrynightwallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        // Boston Plaza
        if (
            !ownedCollectibles.includes("bostonplaza") &&
            location.includes("Boston") &&
            location.includes("United States")
        ) {
            await unlockCollectible(userID, "bostonplaza", ownedCollectibles);
            unlockedSomething = true;
        }

        // Sunset
        if (
            (!ownedCollectibles.includes("sunsetwallpaper") ||
                !ownedCollectibles.includes("sunsethills")) &&
            time.totalMinutes >= 18 * 60 &&
            time.totalMinutes < 19 * 60
        ) {
            await unlockCollectible(userID, "sunsetwallpaper", ownedCollectibles);
            await unlockCollectible(userID, "sunsethills", ownedCollectibles);
            await unlockStamp(userID, "sunset_stamp");
            unlockedSomething = true;
        }

        // Twilight
        if (
            !ownedCollectibles.includes("twilightwallpaper") &&
            ((time.totalMinutes >= 450 && time.totalMinutes < 480) || (time.totalMinutes >= 1200 && time.totalMinutes < 1230))
        ) {
            await unlockCollectible(userID, "twilightwallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        // Winter
        if (!ownedCollectibles.includes("winterwallpaper") && [11, 0, 1, 2].includes(time.month)) {
            await unlockCollectible(userID, "winterwallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        // Ocean Background & Wallpaper
        if (!ownedCollectibles.includes("ocean") && [6, 7, 8].includes(time.month)) {
            await unlockCollectible(userID, "ocean", ownedCollectibles);
            unlockedSomething = true;
        }

        if (!ownedCollectibles.includes("oceanwallpaper") && [6, 7, 8].includes(time.month)) {
            await unlockCollectible(userID, "oceanwallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        // Cloud City
        if (!ownedCollectibles.includes("cloudcitywallpaper") && mood === "reflective") {
            await unlockCollectible(userID, "cloudcitywallpaper", ownedCollectibles);
            unlockedSomething = true;
        }

        if (unlockedSomething) {
            await loadCollectibleDropdowns();
        }

    } catch (error) {
        showMessage(error.message, "error");

    } finally {
        lifeSegmentSelect.disabled = false;
    } 
}

lifeSegmentSelect.addEventListener("change", async function() {
    const lifeSegmentID = lifeSegmentSelect.value; // this will get the ID of the life segment, NOT the title, which is stored in lifeSegment.textContent
    const lifeSegmentName = lifeSegmentSelect.options[lifeSegmentSelect.selectedIndex].text;
    
    if (lifeSegmentID === "") {
        statusMessage.style.display = "none";
        return;
    }

    await savePostcardToLifeSegment(lifeSegmentID, lifeSegmentName);

})


// Auto-Resize Postcard Text
const postcardText = document.getElementById("postcardText");
function resizeMainPostcardText() {
    // Assume starting font size 11, and then shrink it gradually but never go below the minimum font size
    let fontSize = 11;
    const minimumFontSize = 4;

    postcardText.style.fontSize = fontSize + "px";

    while (fontSize > minimumFontSize) {
        // Measure the rectangle occupied by the text area
        const textAreaBox = postcardText.getBoundingClientRect();

        // Create a range (i.e. "highlighting" a part of the browser), which highlights everything inside the div editPostcardText
        const range = document.createRange();
        range.selectNodeContents(postcardText);

        // This highlights how much space the highlighted text actually ocupies
        const actualTextBox = range.getBoundingClientRect();

        const textFits =
            actualTextBox.bottom <= textAreaBox.bottom &&
            actualTextBox.right <= textAreaBox.right;

        if (textFits) {
            break;
        }

        fontSize -= 0.25;
        postcardText.style.fontSize =
            fontSize + "px";
    }

    // console.log("Final font:", fontSize);
}


// Load Collectible Dropdown Menus
const postcardBackgroundSelect = document.getElementById("postcardBackgroundSelect");
const wallpaperSelect = document.getElementById("wallpaperSelect");
let ownedCollectibles = [];

async function loadCollectibleDropdowns() {

    wallpaperSelect.innerHTML = `
        <option value="">
            ${i18next.t("main.customization.selectWallpaper")}
        </option>
        <option value="default">
            ${i18next.t("main.customization.defaultWallpaper")}
        </option>
    `;

    postcardBackgroundSelect.innerHTML = `
        <option value="">
            ${i18next.t("main.customization.selectPostcardBackground")}
        </option>
        <option value="default">
            ${i18next.t("main.customization.defaultPostcard")}
        </option>
    `;

    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError || !authData?.user) {
        alert(i18next.t("main.messages.loginRequired"));
        return;
    }
    
    const userID = authData.user.id;

    const { data: collectiblesData, error: collectiblesError } =
        await supabaseClient
            .from("profiles")
            .select("owned_collectibles, selected_wallpaper")
            .eq("user_id", userID)
            .single();

    if (collectiblesError) {
        alert("Error: " + collectiblesError.message);
        return;
    }

    ownedCollectibles = collectiblesData.owned_collectibles || [];

    // Create an option
    for (const collectibleID of ownedCollectibles) {

        const collectible = findCollectibleByID(collectibleID);

        if (!collectible) {
            console.warn("Collectible not found: ", collectibleID);
        }

        const option = document.createElement("option");

        const translatedCollectibleName = collectiblesTranslations[i18next.language]
            ?.translation
            ?.collectibles
            ?.[collectible.category]
            ?.[collectible.collectibleKey]
            ?.name
            || collectible.name
            || collectible.id;

        option.value = collectible.id;
        option.textContent = translatedCollectibleName;
        if (collectible.category === "wallpapers") {
            wallpaperSelect.appendChild(option);
        } else if (collectible.category === "postcardBackgrounds") {
            postcardBackgroundSelect.appendChild(option);
        }
    }

    const savedWallpaperID = collectiblesData.selected_wallpaper || "default";
    
    wallpaperSelect.value = savedWallpaperID;
    applyWallpaper(savedWallpaperID);

    // Section for Chopin Nocturne loading
    const ownsChopinNocturne = ownedCollectibles.some(function (collectibleID) {
        const collectible = findCollectibleByID(collectibleID)

        return (collectible && collectible.category === "exclusiveMusic" && collectible.id.startsWith("chopin_nocturne"));
    });

    if (ownsChopinNocturne) {
        const exclusiveOption = document.createElement("option");

        exclusiveOption.id = "exclusiveNocturnalOption";
        exclusiveOption.value = "exclusive_nocturnal";
        exclusiveOption.textContent = "🌗 EXCLUSIVE: Nocturnal";

        moodSelect.appendChild(exclusiveOption);
    }

    // Section for Goldberg Variations
    const ownsGoldbergVariations = ownedCollectibles.some(function (collectibleID) {
        const collectible = findCollectibleByID(collectibleID);
        return (collectible && collectible.category === "exclusiveMusic" && collectible.id.startsWith("bach_goldberg"));
    })

    if (ownsGoldbergVariations) {
        const exclusiveOption = document.createElement("option");

        exclusiveOption.id = "exclusiveGoldbergOption";
        exclusiveOption.value = "exclusive_goldberg";
        exclusiveOption.textContent = "🧩 EXCLUSIVE: Memories of Childhood #1";

        moodSelect.appendChild(exclusiveOption);
    }
}

// Change Page Wallpaper
const textItems = [mainPageTitle, mainPageSubtitle, loggedInUserInfo, languageControls, footer, ...stepArrows, ...stepLabels];
function applyWallpaper(wallpaperID) {
    if (!wallpaperID || wallpaperID === "default") {
        document.body.style.backgroundImage = "";
        // Change all the text colors to black
        for (const textColorChange of textItems) {
            textColorChange.style.color = "black";
        }
        return;
    }

    const wallpaper = findCollectibleByID(wallpaperID);

    if (!wallpaper) {
        console.warn("Wallpaper not found:", wallpaperID);
        document.body.style.backgroundImage = "";
        return;
    }

    document.body.style.backgroundImage = `url("${wallpaper.image}")`;

    // Change all the text colors
    const wallpaperData = findCollectibleByID(wallpaperID);
    const wallpaperTextColor = wallpaperData.text_color || "black";

    for (const textColorChange of textItems) {
        textColorChange.style.color = wallpaperTextColor;
    }
}

function updateWallpaper() {
    const wallpaperID = wallpaperSelect.value;
    applyWallpaper(wallpaperID);
}


function updatePostcardBackground() {
    const postcardBackgroundID = postcardBackgroundSelect.value;

    if (postcardBackgroundID === "default") {
        postcard.style.backgroundImage = "";
        return;
    }

    const postcardBackground = findCollectibleByID(postcardBackgroundID);

    if (!postcardBackground) {
        console.warn("Postcard background not found:", postcardBackgroundID);
        return;
    }

    const postcardTextColor = postcardBackground ? postcardBackground.text_color : "black";
    postcardText.style.color = postcardTextColor;

    postcard.style.backgroundImage = `url("${postcardBackground.image}")`;

    if (postcardBackgroundID === "fireworks"){
        launchFireworksCelebration();
    }

}


// Run the functions whenever the selections change
wallpaperSelect.addEventListener("change", async function () {
    const wallpaperID = wallpaperSelect.value;
    applyWallpaper(wallpaperID);
    
    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError || !authData?.user) {
        alert(i18next.t("main.messages.loginRequired"));
        return;
    }

    const userID = authData.user.id;

    const { data: updatedProfile, error } = await supabaseClient
        .from("profiles")
        .update({selected_wallpaper: wallpaperID})
        .eq("user_id", userID)
        .select("selected_wallpaper");

    if (error) {
        console.error("Wallpaper update failed:", error);
        return;
    }

    //console.log("Wallpaper Saved: ", updatedProfile);


    if (wallpaperID === "winterwallpaper") {
        launchSnowfall();
    } else if (wallpaperID === "starrynightwallpaper") {
        launchTwinklingStars();
    } else if (wallpaperID === "oceanwallpaper") {
        launchOceanWaves();
    }

});

postcardBackgroundSelect.addEventListener("change", updatePostcardBackground);


// Change Language
function updateTranslatedDynamicText() {
    imageFailMessage = i18next.t("main.messages.photoRequired");
    captionFailMessage = i18next.t("main.messages.captionRequired");

    if (captionInput.value.trim() === "") {
        captionPreview.textContent =
            i18next.t("main.postcard.captionPlaceholder");
    }
}

languageSelect.addEventListener("change", async function() {
    const selectedLanguage = languageSelect.value;

    if (!selectedLanguage) {
        return;
    }

    await i18next.changeLanguage(selectedLanguage);

    localStorage.setItem("preferredLanguage", selectedLanguage);

    applyTranslations();
    updateTranslatedDynamicText();
    updateDate();

    if (loggedInUserID) {
        loginButton.textContent = i18next.t("main.actions.logout");
        await loadLifeSegments(loggedInUserID);
        await loadOwnedStamps(loggedInUserID);
        await loadCollectibleDropdowns();
    }
})

// Function that requires user login — BUGGED RIGHT NOW
async function requireLogin() {
    const {data: authData, error: authError} = await supabaseClient.auth.getUser();
    if (!authData.user || authError) {
        window.location.href = "login.html";
        return false;
    }
}

// MAIN LOADING
window.addEventListener("load", async function() {
    showLoading("Loading Postcard Creator...");

    /* CURRENTLY THERE IS A BUG: MUST FIX LATER
    const loggedIn = await requireLogin();
    if (!loggedIn) {
        return;
    }
    */

    try {
        const savedLanguage = await initializeTranslations();
        languageSelect.value = savedLanguage;

        updateTranslatedDynamicText();
        updateDate();

        // If the browser does not support serviceWorker then I don't want it to throw an error
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js")
        }

        await checkLoggedInUser();
    } catch (error) {
        console.error("Could not initialize page: ", error);
    } finally {
        hideLoading();
    }
});
