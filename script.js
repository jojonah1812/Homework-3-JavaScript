var lowerCaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", "\"", "\\", ":", ];
var selectedChars = []

function userPasswordOptions() {
  
    //Asking for user input Length
    var userLength = window.prompt("How many letters would you like in your password? Please choose one in the range of 8-128");

    if(isNaN(userLength)){
      alert(userLength + " is not a number. Try it again."); 
      return;
    }
    if (userLength <8) {
      alert("Please choose a number within the range of 8-128")
      return;
    }
    if (userLength > 128) {return;
    }


    //"add if's to check values"
    var userLowerCase = confirm("Would you like to use in your lowercase letters in your password?");
    var userUpperCase = confirm("UPPERCASE LETTERS?");
    var userNumeric = confirm("numbers?");
    var userSpecial = confirm("!&#@  Special Characters?");
   
     
    // if all the character confirms are false, tell user they must 
    // pick at least one group and return to stop the process, start over.  
    if (userLowerCase===false && userUpperCase===false && userNumeric===false && userSpecial===false) {
      alert("Please choose at least one type of character")
      return generatePassword;
    }


    // Gathering selected characters in a separate array.
   if (userLowerCase ===true) {
    selectedChars = selectedChars.concat(lowerCaseChars)
   }
   if (userUpperCase ===true) {
    selectedChars = selectedChars.concat(upperCaseChars)
   }
   if (userNumeric ===true) {
    selectedChars = selectedChars.concat(numericCharacters)
    }
   if (userSpecial ===true) {
    selectedChars = selectedChars.concat(specialCharacters)
   }
}




// Assignment Code
//query selector to generate the button from the DOM
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//beginnings of a function toi write a password and top display that text
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener for the generate button
generateBtn.addEventListener("click", writePassword);











// var selectedChars = [];
// var password = [];
// for (var i=0; i<userLength;i++){
//  password.push(selectedChars[(Math.floor(Math.random() * selectedChars.userlength))]);
// }

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

//function to randomly generate password (array)
//var options = Math.floor(Math.random() * array.length)
// function randomNumber(min, max) { 
//   return Math.random() * (max - min) + min;
// } 

//return options





