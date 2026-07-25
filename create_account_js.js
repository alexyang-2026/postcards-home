const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const createAccountButton = document.getElementById("createAccountButton");
const showPassword = document.getElementById("showPassword");
const statusMessage = document.getElementById("statusMessage");
statusMessage.style.display = "none";

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
        characterCheck.textContent = "✅ At least 8 characters";
    } else {
        characterCheck.textContent = "❌ At least 8 characters";
    }

    if (hasUppercase(passwordContent)){
        uppercaseCheck.textContent = "✅ At least 1 uppercase letter";
    } else {
        uppercaseCheck.textContent = "❌ At least 1 uppercase letter";
    }

    if (hasLowercase(passwordContent)){
        lowercaseCheck.textContent = "✅ At least 1 lowercase letter";
    } else {
        lowercaseCheck.textContent = "❌ At least 1 lowercase letter";
    }
    
    if (hasNumber(passwordContent)) {
        numberCheck.textContent = "✅ At least 1 number";
    } else {
        numberCheck.textContent = "❌ At least 1 number";
    }

    if (hasSpecialCharacter(passwordContent)) {
        specialCharacterCheck.textContent = "✅ At least 1 special character (e.g. !, @, #, etc.)";
    } else {
        specialCharacterCheck.textContent = "❌ At least 1 special character (e.g. !, @, #, etc.)";
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
        uniqueCheck.textContent = "❌ Please choose a username";
        uniqueCheck.style.color = "red";
        return;
    }

    const { data, error } = await supabaseClient
        .from("profiles")
        .select("username")
        .eq("username", username)   // Find every row whose username = the username provided
        .maybeSingle();             // Expect 0 or 1 result

    if (error) {
        console.log(error);
        uniqueCheck.textContent = "❌ " + error.message;
        uniqueCheck.style.color = "red";
        return;
    }

    if (data) {
        uniqueCheck.textContent = "❌ Username Not Available — Try Another!";
        uniqueCheck.style.color = "red";
    } else {
        uniqueCheck.textContent = "✅ Username Available!";
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
    const usernameAvailable = uniqueCheck.textContent;
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();


    if (email === "") {
        showStatusMessage("Please enter an email!", "error");
        return;
    }

    if (!emailInput.checkValidity()) {
        showStatusMessage("Please enter a valid email address!", "error");
        return;
    }

    if (password === "") {
        showStatusMessage("Please enter a password!", "error");
        return;
    }

    if (!passwordIsValid(password)) {
        showStatusMessage("Password does not meet all requirements.", "error");
        return;
    }

    if (password !== confirmPassword) {
        showStatusMessage("Passwords do not match.", "error");
        return;
    }

    if (firstName === "") {
        showStatusMessage("Please enter your real first name!", "error");
        return;
    }

    if (lastName === "") {
        showStatusMessage("Please enter your real last name!", "error");
        return;
    }

    if (username === "") {
        showStatusMessage("Please Enter a Username!", "error");
        return;
    }

    if (!birthday) {
        showStatusMessage("Please Enter Your Birthday!", "error");
        return;
    }

    if (usernameAvailable !== "✅ Username Available!") {
        showStatusMessage("Your username is not available!", "error");
        return;
    }


    showStatusMessage("Please wait...", "success")

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
        

    showStatusMessage("Account Created Successfully! Enjoy Postcard-Collecting! 🎉", "success");
    redirectMessage.style.display = "block";

    const timer = setInterval(function() {
        
        redirectMessage.textContent = `Redirecting back to application in ${seconds}...`
        seconds --;
        
        if (seconds < 0){
            clearInterval(timer); 

            window.location.href = "index.html"
        }
    }, 1000); // 1000 ms = 1 second
    
});

