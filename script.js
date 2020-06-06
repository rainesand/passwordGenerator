// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// var passwordLength = prompt("how long would you like your password to be?");
// var confirmCapital = confirm("would you like to include capital letters?");
// var confirmLowercase = confirm("would you like to include lowercase letters?");
// var confirmNumber = confirm("would you like to include numbers?")
var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

function generatePassword() {
  var passwordLength = prompt("how long would you like your password to be?");
 
  if (passwordLength  > 7 && passwordLength < 129  ) {
  var confirmCapital = confirm("would you like to include capital letters?");
  var confirmLowercase = confirm("would you like to include lowercase letters?");
  var confirmNumber = confirm("would you like to include numbers?");
 }

 else {
   alert("password must be at least 8 characters and at most 128 characters.");
 }
}











function writePassword() {
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





