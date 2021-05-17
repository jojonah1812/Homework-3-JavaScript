// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", "\"", "\\", ":", ];
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]


//Asking for user input Length
var userLength = window.prompt("How many letters would you like in your password? Please choose one in the range of 8-128");

  if(isNaN(userLength)){
    document.write(num1 + " is not a number <br/>");
 }
  if (userLength <8) {return;
}
  if (userLength > 128) {return;
}


// Asking for special character types
let userSpecialCharacters = true;
confirm("Would you like to use numbers in your password?");
let userSpecialCharacters = true;
confirm("lowercase letters?");
let userSpecialCharacters = true;
confirm("UPPERCASE LETTERS?");
let userSpecialCharacters = true;
confirm("!&#@  Special Characters?");











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
