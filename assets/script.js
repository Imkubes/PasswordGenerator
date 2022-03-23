// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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