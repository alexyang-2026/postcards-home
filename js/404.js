const savedLanguage = localStorage.getItem("YOUR_EXISTING_LANGUAGE_KEY") || "en";

i18next.init({
    lng: savedLanguage,
    resources: resources
}).then(function() {
    updateTranslations();
});