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

    if (updatedLocation !== postcard.location) {
        updates.location = updatedLocation;
    }

    if (updatedMood !== postcard.mood) {
        updates.mood = updatedMood;
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