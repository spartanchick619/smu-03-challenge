// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
    var passwordLength = lengthPrompt();
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword(num) {
    //TODO: Create Password Generation Routine and call it randomPassword
    var randomPassword = '';
    for (var i = 0; i < num; i++) {
        randomPassword += getRandomCharacter();
    }

    return randomPassword;
}

function lengthPrompt() {
    while (true) {
        passwordLength = prompt("How many characters do you want your password to be?\nYou must choose a number between 8 and 128.");
        if (passwordLength && isNaN(passwordLength)) {
            alert("Invalid input.");
        } else if (passwordLength) {
            if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
                return parseInt(passwordLength);
            } else {
                alert("You must choose a value between 8 and 128 inclusive.")
            }
        } else if (isNull(passwordLength)) {
            return;
        } else {
            alert("Invalid input.");
        }
    }
}

function characterTypePrompt() {
    return;
}

function getRandomCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
