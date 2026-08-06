const languageSelect = document.getElementById("languageSelect");

async function initializeLegalTranslations() {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

    await i18next.init({
        lng: savedLanguage,
        fallbackLng: "en",
        resources: legalTranslations
    });

    applyLegalTranslations();

    languageSelect.value = savedLanguage;
}

function applyLegalTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function(element) {
        const key = element.dataset.i18n;
        element.textContent = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function(element) {
        const key = element.dataset.i18nHtml;
        element.innerHTML = i18next.t(key);
    });

    // This because we want to enable translation for the accessibility features
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

    applyLegalTranslations();
});

window.addEventListener("load", async function() {
    try {
        await initializeLegalTranslations();
    } catch (error) {
        console.error("Could not initialize legal-page translations:", error);
    }
});