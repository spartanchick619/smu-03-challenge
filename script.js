// Assignment Code
var alphaSet = 'abcdefghijklmnopqrstuvxyz';
var numericSet = '0123456789';
var specialSet = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
var passwordLength = null;
var incLower = false;
var incUpper = false;
var incNum = false;
var incSpecial = false;
var strSet = '';

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
    // Reset the settings
    strSet = '';
    // Ask user for the settings
    passwordLength = lengthPrompt();
    incLower = confirm("Would you like to include lowercase letters?");
    incUpper = confirm("Would you like to include uppercase letters?");
    incNum = confirm("Would you like to include numbers?");
    incSpecial = confirm("Would you like to include special characters?");
    // Setup the strSet to be used by the password generator
    if (!incLower && !incUpper && !incNum && !incSpecial) {
        alert("You must choose at least one character set. Please try again.")
    } else {
        if (incLower) { strSet += alphaSet; }
        if (incUpper) { var alphaSetUpper = alphaSet.toUpperCase(); strSet += alphaSetUpper; }
        if (incNum) { strSet += numericSet; }
        if (incSpecial) { strSet += specialSet; }
        // Provide confirmation to the user
        alert("You chose a password " + passwordLength + " characters long.\nInclude Lowercase Letters: " + incLower + "\nInclude Uppercase Letters: " + incUpper + "\nInclude Numbers: " + incNum + "\nInclude Special Characters: " + incSpecial);
    }
    // Create the password
    var password = generatePassword();
    // Write password to screen
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    let randomPassword = '';
    for (var i = 0; i < passwordLength; i++) {
        var char = Math.floor(Math.random() * strSet.length + 1);
        randomPassword += strSet.charAt(char);
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

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
