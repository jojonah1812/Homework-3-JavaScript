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
let userNumeric = true;
confirm("Would you like to use numbers in your password?");
let userSpecial = true;
confirm("lowercase letters?");
let userLowerCase = true;
confirm("UPPERCASE LETTERS?");
let userUpperCase = true;
confirm("!&#@  Special Characters?");

// if all the character confirms are false, tell user they must 
// pick at least one group and return to stop the process, start over.  


//function to generate password
  //variable=password options function
  //array=[]
  //check if options exist, return
  //check if options have special characters
  //array=array.concat(specialCharacters)
  //check if options have special characters
  //array=array.concat(lowerCaseCharacters)
  //check if options have special characters
  //array=array.concat(upperCaseCharacters)
  //check if options have special characters
  //array=array.concat(numericCharacters)
  //for loop[ to call randomlygenerater password, pass our array]

//funtionto rtandomly generate password (array)
//var options = Math.floor(Math.random() * array.length)
//return options


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
