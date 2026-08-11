// I decided to add a service worker because I want to make Postcards Home a PWA
// Thus, it can load offline

self.addEventListener("install", function () {
    console.log("Postcards Home service worker installed.");
});