const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const createAccountButton = document.getElementById("createAccountButton");
const showPassword = document.getElementById("showPassword");
const statusMessage = document.getElementById("statusMessage");
statusMessage.style.display = "none";

const languageSelect = document.getElementById("languageSelect");

///// Block of check password stuff /////
const characterCheck = document.getElementById("characterCheck");
const uppercaseCheck = document.getElementById("uppercaseCheck");
const lowercaseCheck = document.getElementById("lowercaseCheck");
const numberCheck = document.getElementById("numberCheck");
const specialCharacterCheck = document.getElementById("specialCharacterCheck");

///// Block of username and birthday check /////
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const usernameInput = document.getElementById("usernameInput");
const uniqueCheck = document.getElementById("uniqueCheck");
const birthdateInput = document.getElementById("birthdateInput");

let usernameIsAvailable = false;

async function initializeCreateAccountTranslations() {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

    await i18next.init({
        lng: savedLanguage,
        fallbackLng: "en",
        resources: createAccountTranslations
    });

    applyCreateAccountTranslations();
    languageSelect.value = savedLanguage;
}

function applyCreateAccountTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function(element) {
        const key = element.dataset.i18n;
        element.textContent = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = i18next.t(key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function(element) {
        const key = element.dataset.i18nAriaLabel;
        element.setAttribute("aria-label", i18next.t(key));
    });

    document.documentElement.lang = i18next.language;
}

function hasUppercase(text){
    return /[A-Z]/.test(text); // return true or false
}

function hasLowercase(text){
    return /[a-z]/.test(text);
}

function hasNumber(text){
    return /[0-9]/.test(text);
}

function hasSpecialCharacter(text){
    return /[^\w]/.test(text);
}

// Timer for redirect
let seconds = 3;
const redirectMessage = document.getElementById("redirectMessage");
redirectMessage.style.display = "none";

passwordInput.addEventListener("input", function() {
    const passwordContent = passwordInput.value;

    if (passwordContent.length >= 8){
        characterCheck.textContent = i18next.t("createAccount.passwordRequirements.characterPassed");
    } else {
        characterCheck.textContent = i18next.t("createAccount.passwordRequirements.characterFailed");
    }

    if (hasUppercase(passwordContent)){
        uppercaseCheck.textContent = i18next.t("createAccount.passwordRequirements.uppercasePassed");
    } else {
        uppercaseCheck.textContent = i18next.t("createAccount.passwordRequirements.uppercaseFailed");
    }

    if (hasLowercase(passwordContent)){
        lowercaseCheck.textContent = i18next.t("createAccount.passwordRequirements.lowercasePassed");
    } else {
        lowercaseCheck.textContent = i18next.t("createAccount.passwordRequirements.lowercaseFailed");
    }
    
    if (hasNumber(passwordContent)) {
        numberCheck.textContent = i18next.t("createAccount.passwordRequirements.numberPassed");
    } else {
        numberCheck.textContent = i18next.t("createAccount.passwordRequirements.numberFailed");
    }

    if (hasSpecialCharacter(passwordContent)) {
        specialCharacterCheck.textContent = i18next.t("createAccount.passwordRequirements.specialPassed");
    } else {
        specialCharacterCheck.textContent = i18next.t("createAccount.passwordRequirements.specialFailed");
    }

})

function passwordIsValid(password) {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^\w]/.test(password)
    );
}


showPassword.addEventListener("change", function(){
    const type = showPassword.checked ? "text":"password";

    // ternary operator used here: showPassword.checked is either true or false.
    // if showPassword.checked is true, then the type = "text"
    // if showPassword.checked is false, then the type = "password"
    // Now we assign the result to passwordInput.type and confirmPasswordInput.type

    passwordInput.type = type;
    confirmPasswordInput.type = type;
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
}

usernameInput.addEventListener("input", async function() {
    const username = usernameInput.value.trim();

    if (username === "") {
        usernameIsAvailable = false;
        uniqueCheck.textContent = i18next.t("createAccount.usernameCheck.empty");
        uniqueCheck.style.color = "red";
        return;
    }

    const { data, error } = await supabaseClient
        .from("profiles")
        .select("username")
        .eq("username", username)   // Find every row whose username = the username provided
        .maybeSingle();             // Expect 0 or 1 result

    if (error) {
        usernameIsAvailable = false;
        console.log(error);
        uniqueCheck.textContent = "❌ " + error.message;
        uniqueCheck.style.color = "red";
        return;
    }

    if (data) {
        usernameIsAvailable = false;
        uniqueCheck.textContent = i18next.t("createAccount.usernameCheck.unavailable");
        uniqueCheck.style.color = "red";
    } else {
        usernameIsAvailable = true;
        uniqueCheck.textContent = i18next.t("createAccount.usernameCheck.available");
        uniqueCheck.style.color = "green";
    }
})


// async function because it needs to wait for Supabase
createAccountButton.addEventListener("click", async function(){
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const username = usernameInput.value.trim();
    const birthday = birthdateInput.value;
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();


    if (email === "") {
        showStatusMessage(i18next.t("createAccount.messages.emailRequired"), "error");
        return;
    }

    if (!emailInput.checkValidity()) {
        showStatusMessage(i18next.t("createAccount.messages.invalidEmail"), "error");
        return;
    }

    if (password === "") {
        showStatusMessage(i18next.t("createAccount.messages.passwordRequired"), "error");
        return;
    }

    if (!passwordIsValid(password)) {
        showStatusMessage(i18next.t("createAccount.messages.invalidPassword"), "error");
        return;
    }

    if (password !== confirmPassword) {
        showStatusMessage(i18next.t("createAccount.messages.passwordMismatch"), "error");
        return;
    }

    if (firstName === "") {
        showStatusMessage(i18next.t("createAccount.messages.firstNameRequired"), "error");
        return;
    }

    if (lastName === "") {
        showStatusMessage(i18next.t("createAccount.messages.lastNameRequired"), "error");
        return;
    }

    if (username === "") {
        showStatusMessage(i18next.t("createAccount.messages.usernameRequired"), "error");
        return;
    }

    if (!birthday) {
        showStatusMessage(i18next.t("createAccount.messages.birthdayRequired"), "error");
        return;
    }

    if (!usernameIsAvailable) {
        showStatusMessage(i18next.t("createAccount.messages.usernameUnavailable"), "error");
        return;
    }


    showStatusMessage(i18next.t("createAccount.messages.waiting"), "success")

    const fullName = firstName + " " + lastName;

    
    // Use the connection I created in supabase.js, go to the authentication service, and ask Supabase to create a new user.
    const {data, error} = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    // ^ This is just the object destructuring code (same as the following:)
    // const response = await supabaseClient.auth.signUp(...)
    // const data = response.data;
    // const error = response.error;

    if (error){
        showStatusMessage(error.message, "error");
        return;
    }

    const { error: profileError } = await supabaseClient
        .from("profiles")
        .insert({
            user_id: data.user.id,
            username: username,
            birthdate: birthday,
            profile_picture: null,
            full_name: fullName
        });
    
    if (profileError) {
        showStatusMessage(profileError.message, "error");
        return;
    }
        

    showStatusMessage(i18next.t("createAccount.messages.accountCreated"), "success");
    redirectMessage.style.display = "block";

    const timer = setInterval(function() {
        
        redirectMessage.textContent = i18next.t(
            "createAccount.messages.redirecting",
            {
                seconds: seconds
            }
        );

        seconds --;
        
        if (seconds < 0){
            clearInterval(timer); 

            window.location.href = "index.html"
        }
    }, 1000); // 1000 ms = 1 second
    
});

languageSelect.addEventListener("change", async function() {
    const selectedLanguage = languageSelect.value;

    await i18next.changeLanguage(selectedLanguage);

    localStorage.setItem("preferredLanguage", selectedLanguage);

    applyCreateAccountTranslations();

    passwordInput.dispatchEvent(new Event("input"));
    usernameInput.dispatchEvent(new Event("input"));
});

window.addEventListener("load", async function() {
    try {
        await initializeCreateAccountTranslations();
    } catch (error) {
        console.error(
            "Could not initialize create-account translations:",
            error
        );
    }
});