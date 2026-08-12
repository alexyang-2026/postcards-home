// JS functionality for the login button on the main screen is already implemented in script.js
// If I put functionality for the login button here (i.e. const loginButton, and loginButton.addEventListener) then it would raise a TypeError because there is no loginButton on this page.
// In essence, this is only a script for the login page.
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const showPassword = document.getElementById("showPassword");

const resendConfirmationButton = document.getElementById("resendConfirmationButton");
const statusMessage = document.getElementById("statusMessage");
statusMessage.style.display = "none";

const redirectMessage = document.getElementById("redirectMessage");
redirectMessage.style.display = "none";

const loginButton = document.getElementById("loginButton");
const languageSelect = document.getElementById("languageSelect");


// TRANSLATION FUNCTIONS
async function initializeLoginTranslations() {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

    await i18next.init({
        lng: savedLanguage,
        fallbackLng: "en",
        resources: loginTranslations
    });

    applyLoginTranslations();
    languageSelect.value = savedLanguage;
}

function applyLoginTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function(element) {
        const key = element.dataset.i18n;
        element.textContent = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function(element) {
        const key = element.dataset.i18nHtml;
        element.innerHTML = i18next.t(key);
    });

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

    applyLoginTranslations();
});


// Show Password Button
showPassword.addEventListener("change", function() {
    if (showPassword.checked) {
        passwordInput.type = "text"; // show the password
    } else {
        passwordInput.type = "password"; // hide the password
    }
});

function showStatusMessage(message, type) {
    // message is the message to show
    // type is the type of message (i.e. error or success)
    statusMessage.style.display = "block";

    if (type === "error") {
        statusMessage.style.color = "red";
    } else {
        statusMessage.style.color = "green";
    }

    statusMessage.textContent = message;
};

/*
resendConfirmationButton.addEventListener("click", async function(){
    const email = emailInput.value.trim();
    
    if (email === "") {
        showStatusMessage("Please enter your email first!", "error");
        return;
    }

    if (!emailInput.checkValidity()) {
        showStatusMessage("Please enter a valid email address.", "error");
        return;
    }

    showStatusMessage("Sending confirmation email...", "success");

    const {data, error} = await supabaseClient.auth.resend({
        type: "signup",
        email: "email"
    });

    if (error){
        showStatusMessage(error.message, "error");
        return;
    }

    showStatusMessage("Confirmation email resent! Please check your inbox.", "success");
})

*/

let seconds = 3;

loginButton.addEventListener("click", async function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const {data, error} = await supabaseClient.auth.signInWithPassword({
        email,
        password
    })

    if (error){
        showStatusMessage(error.message, "error");
        return;
    }

    const userID = data.user.id;

    const { data: profileData, error: profileError } = await supabaseClient
        .from("profiles")
        .select("is_deleted")
        .eq("user_id", userID)
        .single();
    
    if (profileError) {
        await supabaseClient.auth.signOut();

        showStatusMessage(
            i18next.t("login.messages.profileError", {
                message: profileError.message
            }),
            "error"
        );

        return;
    }

    if (profileData.is_deleted) {
        await supabaseClient.auth.signOut();

        showStatusMessage(
            i18next.t("login.messages.deletedAccount"),
            "error"
        );

        return
    }

    showStatusMessage(
        i18next.t("login.messages.loginSuccess"),
        "success"
    );

    redirectMessage.style.display = "block";

    const timer = setInterval(function (){
        redirectMessage.textContent = i18next.t(
            "login.messages.redirecting",
            {
                seconds: seconds
            }
        );

        seconds--;

        if (seconds < 0){
            clearInterval(timer); 

            window.location.href = "index.html"
        }

    }, 1000);

});


window.addEventListener("load", async function() {
    try {
        await initializeLoginTranslations();
    } catch (error) {
        console.error(
            "Could not initialize login-page translations:",
            error
        );
    }
});