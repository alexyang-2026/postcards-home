// LOCATION FUNCTION
async function getLocation(previewElement) {

    previewElement.style.display = "block";
    previewElement.textContent = "📍 Finding Location...";

    if (!navigator.geolocation) {
        previewElement.textContent = "📍 Somewhere in the world 🫪";
        return;
    }

    navigator.geolocation.getCurrentPosition(

        async function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const url =
                "https://nominatim.openstreetmap.org/reverse?format=json" +
                "&lat=" + latitude +
                "&lon=" + longitude;

            const response = await fetch(url);
            const data = await response.json();

            const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.municipality ||
                "Unknown city";

            const region = data.address.state;
            const country = data.address.country;

            previewElement.textContent = "📍 " + city + ", " + region + ", " + country;
        },

        function(error) {
            previewElement.textContent = "📍 Location unavailable. Error Code: " + error.code;
        }

    );
} 


// SAVE POSTCARD FUNCTION
async function savePostcardToSupabase(postcard) {
    const updates = {};

    const updatedLocation = editLocationPreview.textContent.trim();
    const updatedMood = moodSelect.value || null;
    const updatedCaption = editCaptionPreview.textContent.trim() || null;

    if (updatedLocation !== postcard.location) {
        updates.location = updatedLocation;
    }

    if (updatedMood !== postcard.mood) {
        updates.mood = updatedMood;
    }

    if (updatedCaption !== (postcard.caption || "")) {
        updates.caption = updatedCaption;
    }

    if (Object.keys(updates).length === 0) {
        alert("No changes were made.");
        return;
    }

    const { data: updatedPostcard, error } = await supabaseClient
        .from("postcards")
        .update(updates)
        .eq("id", postcard.id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    Object.assign(postcard, updatedPostcard);

    alert("Postcard saved!");
}

// CREATE A SPINNER FOR LOADING SCREENS
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");

function showLoading(message = "Loading...") {
    loadingText.textContent = message;
    loadingOverlay.style.display = "flex";
}

function hideLoading(){
    loadingOverlay.style.display = "none";
}


/// Fireworks Helper Function
function launchFireworkBurst() {
    confetti({
        particleCount: 5000,
        spread: 360,
        startVelocity: 28,
        gravity: 0.7,
        ticks: 70,
        scalar: 0.8,

        origin: {
            x: 0.2 + Math.random() * 0.6,
            y: 0.15 + Math.random() * 0.4
        }
    });
}

function launchFireworksCelebration() {
    launchFireworkBurst();

    setTimeout(launchFireworkBurst, 300);
    setTimeout(launchFireworkBurst, 650);
}

// Snowfall with Confetti
function snowfallBurst () {
    const clusterX = Math.random();
    confetti({
        particleCount: 15,

        angle: 270,      // Drop straight down
        spread: 10,

        gravity: 0.70,
        startVelocity: 2,
        drift: 0.1,

        ticks: 300,

        colors: ["white", "#eef7ff"],
        scalar: 1.2,

        origin: {
            x: clusterX,
            y: 0
        }
    })
}

function launchSnowfall() {
    const snowfall = setInterval(snowfallBurst, 120);
    
    // Stop the snowfall after 5 seconds
    setTimeout(function () {
        clearInterval(snowfall);
    }, 5000);
}