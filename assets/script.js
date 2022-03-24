// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  for (var i =0; i <= passwordLength; i++) {
    
    password = [""];
  }
  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Create variables to save user input from prompts
  // passwordLength string -- convert to numeric using a method
  // specialCharacters boolean
  // numericCharacters boolean
  // lowercaseCharacters boolean
  // uppercaseCharacters boolean
    // alert, confirm prompt
    // use conditionals to validate inputs (password length, user enters no inputs)

// Create arrays for each type of character
  //specialCharacters, numericCharacters, lowercaseCharacters, uppercaseCharacters

// Use randomizer to select characters from array

// Generate password function -- take user input, grab characters from array and generate a password

// Create an empty array that represents the final password

// Join the character arrays together based on user input

// Randomize characters from the joined arrays

// Transforming the array into a string -- join method


//Prompting user for length desired for password
var passwordLength = prompt("How many characters would you like in your password? Must be a minimum of 8 characters and a maximum of 128 characters", "");
//Converting string to numeric data type
passwordLength = parseInt(passwordLength);
//else if statement making sure the user cannot enter regular characters, must be >= 8 <=128
if (isNaN(passwordLength)) {
  alert("You did not enter a valid number");
} else if (passwordLength < 8) {
  alert("The number must be greater than 8");
} else if (passwordLength > 128) {
  alert("The number must be less than 128")
} else {
  var passwordLengthNumber = (passwordLength);
}

console.log(typeof passwordLengthNumber);

//Prompting if user wants special characters
var specialCharacters = confirm("Would you like to include special character's? Press Ok for yes, Cancel for no.");

if (specialCharacters == true) {
  specialCharacters = true;
  console.log(specialCharacters);
} else {
  specialCharacters = false;
  console.log(specialCharacters);
}
//Prompting if user wants numeric characters
var numericCharacters = confirm("Would you like to include numbers? Press Ok for yes, Cancel for no.");

if (numericCharacters == true) {
  numericCharacters = true;
  console.log(numericCharacters);
} else {
  numericCharacters = false;
  console.log(numericCharacters);
}
//Prompting if user wants lower case characters
var lowercaseCharacters = confirm("Would you like to include lower case letters? Press Ok for yes, Cancel for no.");

if (lowercaseCharacters == true) {
  lowercaseCharacters = true;
  console.log(lowercaseCharacters);
} else {
  lowercaseCharacters = false;
  console.log(lowercaseCharacters);
}
//Prompting if user wants upper case characters
var uppercaseCharacters = confirm("Would you like to include upper case characters? Press Ok for yes, Cancel for no.");

if (uppercaseCharacters == true) {
  uppercaseCharacters = true;
  console.log(uppercaseCharacters);
} else {
  uppercaseCharacters = false;
  console.log(uppercaseCharacters);
}

//if user enters no for all character types
if (!specialCharacters && !numericCharacters && !lowercaseCharacters && !uppercaseCharacters) {
  alert("You must choose atleast one of the criteria suggested!");
}

var specialCharacterArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var numericCharacterArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacterArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var uppercaseCharacterArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

var newPasswordArray = [];
