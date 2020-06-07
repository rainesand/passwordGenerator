// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

var specialChar = "!@#$%&*?";
var numberChar = "1234567890";
var alphabetChar = "abcdefghijklmnopqrstuvwxyz";
var capitalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newPassword = "";

function generatePassword() {
 
    var passwordLength = prompt("how long would you like your password to be?");
     if (passwordLength  > 7 && passwordLength < 129  ) {
  
        var confirmCapital = confirm("would you like to include capital letters?");
        var confirmSpecial = confirm("would you like to use special characters?");
        var confirmNumber = confirm("would you like to include numbers?");
          if (confirmCapital === true && confirmSpecial === true && confirmNumber === true) {
            for (var i = 0; i < passwordLength/4; i++){
              newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + capitalChar.charAt(Math.floor(Math.random() * Math.floor(capitalChar.length-1))) + numberChar.charAt(Math.floor(Math.random() * Math.floor(numberChar.length-1))) + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length-1)));
            }
          }
          else if (confirmCapital === true && confirmSpecial === true && confirmNumber !== true) {
            for (var i = 0; i < passwordLength/3; i++){
              newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + capitalChar.charAt(Math.floor(Math.random() * Math.floor(capitalChar.length-1))) + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length-1)));
            }
          }
          else if (confirmCapital === true && confirmSpecial !== true && confirmNumber === true) {
            for (var i = 0; i < passwordLength/3; i++){
              newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + capitalChar.charAt(Math.floor(Math.random() * Math.floor(capitalChar.length-1))) + numberChar.charAt(Math.floor(Math.random() * Math.floor(numberChar.length-1)));
            }
          }
          else if (confirmCapital !== true && confirmSpecial === true && confirmNumber === true) {
            for (var i = 0; i < passwordLength/3; i++){
              newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + numberChar.charAt(Math.floor(Math.random() * Math.floor(numberChar.length-1))) + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length-1)));
            }
          }
          else if (confirmCapital !== true && confirmSpecial !== true && confirmNumber === true) {
            for (var i = 0; i < passwordLength/2; i++){
              newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + numberChar.charAt(Math.floor(Math.random() * Math.floor(numberChar.length-1)));
            }
          }
          else if (confirmCapital !== true && confirmSpecial === true && confirmNumber !== true) {
            for (var i = 0; i < passwordLength/2; i++){ 
            newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + specialChar.charAt(Math.floor(Math.random() * Math.floor(specialChar.length-1)));
            }
          }
          else if (confirmCapital === true && confirmSpecial !== true && confirmNumber !== true) {
            for (var i = 0; i < passwordLength/2; i++){
            newPassword = newPassword + alphabetChar.charAt(Math.floor(Math.random() * Math.floor(alphabetChar.length-1))) + capitalChar.charAt(Math.floor(Math.random() * Math.floor(capitalChar.length-1)))
            }
          }
          else {
          newPassword = alphabetChar[i];
          }
    }
  
    else {
    alert("password must be at least 8 characters and at most 128 characters.");
    }
  
}
  
generatePassword();


$("#password").text(newPassword);
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





