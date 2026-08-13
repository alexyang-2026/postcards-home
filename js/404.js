const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

i18next.init({
    lng: savedLanguage,
    resources: resources
}).then(function() {
    updateTranslations();
});
