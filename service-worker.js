// I decided to add a service worker because I want to make Postcards Home a PWA
// Thus, it can load offline
const CACHE_NAME = "postcards-home-v1";

self.addEventListener("install", function () {
    console.log("Postcards Home service worker installed.");

    caches.open(CACHE_NAME).then(function(cache) {
        console.log("Cache opened:", cache);
    });


});