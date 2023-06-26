// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword(17);
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

function getRandomCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
