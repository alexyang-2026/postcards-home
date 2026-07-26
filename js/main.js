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
const musicPlayer = document.getElementById("musicPlayer");
const musicMessage = document.getElementById("musicMessage");
musicPlayer.style.display = "none";
musicMessage.style.display = "none";

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


/// LIFE SEGMENT FUNCTIONALITY ///
lifeSegmentSelect.innerHTML = "";
const option = document.createElement("option");
option.value = "";
option.textContent = "No Life Segments Yet!"
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
        lifeSegmentSelect.innerHTML = '<option value="">No Life Segments Yet!</option>';
        lifeSegmentSelect.disabled = true;
        return;
    }

    lifeSegmentSelect.disabled = false;
    lifeSegmentSelect.innerHTML = '<option value="">Add Postcard to Life Segment...</option>';
    
    for (const segment of data){
        const option = document.createElement("option");
        option.value = segment.id;
        option.textContent = segment.title;
        lifeSegmentSelect.appendChild(option);
    }
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

    if (authError || !authData) {
        lifeSegmentStatusMessage.style.display = "block";
        lifeSegmentStatusMessage.style.color = "red";
        lifeSegmentStatusMessage.textContent = "Error: " + authError.message;
        console.log(authError)
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
    lifeSegmentStatusMessage.textContent = "Successfully Created Life Segment! \nFeel free to close this popup window, or create another!"

    await loadLifeSegments(userID);
    // console.log("Loading life segments...");

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
    captionPreview.textContent = captionInput.value || "Your Caption Will Appear Here."; // the || "Hi!" is in case the user deletes all their input
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
    }).then(function (canvas){

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
        showMessage("🎉 Postcard Downloaded Successfully! 🎉", "success");
        launchConfetti(3000, 10);
    });
});

stampSelect.addEventListener("change", function() {

    console.log("selected stamp:", stampSelect.value);

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

                showMessage("🎉 Congrats! Postcard Shared Successfully! 🎉", "success");
                launchConfetti(3000, 10)
            } 
            else {
                showMessage("Sharing is not supported by your browser, so postcard was downloaded instead. 🎉", "error");

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
        musicRerollButton.style.display = "none";
        return;
    }

    musicPlayer.style.display = "flex";
    musicRerollButton.style.display = "flex";

    const recommendations_array = musicDatabase[selectedMood];
    const randomIndex = Math.floor(Math.random() * recommendations_array.length);
    // Math.random() creates a random number between 0-1, so we multiply by the array length to get a random number between 0-(last index of the array) rounded down
    // Example: if the array length was 2, then Math.random() * recommendations_array.length will give us a number from 0 <= x < 2, where 0-0.999999... --> index 0, and 1-1.999999.... --> index 1 (the last index of the array)

    currentMusicRecommendation = recommendations_array[randomIndex];

    // Now play the music file which is stored in "recommendation.audio"
    musicMessage.style.display = "block" // show the music message because we hid it initially
    musicMessage.textContent = "♫ Currently listening to: ♫\n" + currentMusicRecommendation.piece;
    musicPlayer.src = currentMusicRecommendation.audio;
    musicPlayer.play(); 
}


moodSelect.addEventListener("change", loadRandomMusic);
musicRerollButton.addEventListener("click", loadRandomMusic);

locationButton.addEventListener("click", function(){
    getLocation(locationPreview);
});

function updateDate() {
    datePreview.textContent = new Date().toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric"
    });
}

resetPostcardButton.addEventListener("click", function() {

    const confirmed = confirm(
        "Are you SURE you want to RESET your postcard?"
    );

    if (!confirmed){
        return;
    }

    photoPreview.src = "";
    photoInput.value = "";

    captionInput.value = "";
    captionPreview.textContent = "Your Caption Will Appear Here.";

    stampSelect.value = "";
    stampPreview.src = "";
    stampPreview.style.display = "none";

    moodSelect.value = "";
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    musicPlayer.removeAttribute("src"); // No audio
    musicPlayer.load();
    musicPlayer.style.display = "none";
    musicRerollButton.style.display = "none";

    musicMessage.textContent = "";
    musicMessage.style.display = "none";

    locationPreview.textContent = "";
    locationPreview.style.display = "none";
    statusMessage.style.display = "none";
    statusMessage.textContent = "";


    
    updateDate();

    showMessage("Postcard Reset Successfully.", "success");
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
        loginButton.textContent = "Log In to Save Your Postcards!";
        loginButton.style.display = "block";
        return
    }

    const userID = authData.user.id;

    const { data: profileData, error: profileError } = await supabaseClient
        .from("profiles")
        .select("full_name")
        .eq("user_id", userID)
        .maybeSingle();

    loginButton.textContent = "Log Out"
    welcomeMessage.style.display = "block";
    welcomeMessage.textContent = "Welcome, " + profileData.full_name + "!";

    loadLifeSegments(userID);
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
        showMessage("Please Take a Photo Before Saving Your Postcard!", "error");
        return;
    }

    // Next, check the caption
    if (!checkCaption()) {

        s
        showMessage("Please Write a Caption Before Saving Your Postcard! (You can edit it later)", "error");
        return;
    }

    showMessage("Saving Postcard...please wait...", "waiting")

    const { data: authData, error: authError } = await supabaseClient.auth.getUser();

    if (authError || !authData.user) {
        showMessage("Please log in before saving postcards.", "error");
        return;
    }

    const userID = authData.user.id;
    const caption = captionInput.value.trim();
    const location = locationPreview.textContent.trim();
    const stamp = stampSelect.value || null;
    const postcardDate = new Date().toISOString().slice(0, 10);
    const mood = moodSelect.value || null;
    const music = currentMusicRecommendation ? currentMusicRecommendation.piece : null;

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
                postcard_date: postcardDate
            });
        
        if (insertError) {
            throw insertError;
        }

        showMessage("🎉 Postcard saved to life segment " + lifeSegmentName + "!", "success");
        lifeSegmentSelect.value = ""; // this prevents duplicate photo saves

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







window.addEventListener("load", function() {
    launchConfetti(5000, 15);
    checkLoggedInUser();
});
