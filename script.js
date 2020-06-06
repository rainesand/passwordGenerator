// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// var confirmCapital = confirm("would you like to include capital letters?");
// var confirmLowercase = confirm("would you like to include lowercase letters?");
// var confirmNumber = confirm("would you like to include numbers?")


function generatePassword() {
  // possible characters included
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
  var passwordLength = prompt("how long would you like your password to be?");
 
  var newPassword = "";

  if (passwordLength  > 7 && passwordLength < 129  ) {
    var confirmCapital = confirm("would you like to include capital letters?");
      if (confirmCapital === true) {
        newPassword
      }
    }

 else {
   alert("password must be at least 8 characters and at most 128 characters.");
 }

 
// RNG for the password generator
for (var i = 0; i < passwordLength; i++){
  newPassword = newPassword + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length-1)));
}

console.log(newPassword)
}

function writePassword() {
  var password = generatePassword() ;
}



  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





