var numbers = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword(length,finalString);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);


function getCriteria(){
  var num = confirm("Press Confirm if you would like your password to contain numbers.");
  var lower = confirm("Press Confirm if you would like lower case letters in your password");
  var upper = confirm("Press confirm if you would like upper case letters in your password.");
  var special = confirm("Press confirm if you would like special characters in your password.");


  if(num){
    finalString = numbers;
  }
  if(lower) {
    finalString = finalString + lowerLetters;
  }
  if(upper) {
    finalString = finalString + upperLetters;
  }
  if(special){
    finalString = finalString + specialCharacters;
  }
  if(num===false && lower === false && upper === false && special === false){
    alert("You must choose at lease one criteria. Please try again.")
    finalString = "";

  }
 return (finalString);
 
}

function generatePassword(passwordLength,finalString) {
 var result = "";
  for(var i = 0; i < passwordLength; i++){ 
    var random = Math.floor(Math.random() * finalString.length);
    result += finalString.charAt(random);
  }
  return(result);

}
var lengthValid = false;

do{
var passwordLength = prompt("How long would you like your password to be? It can be 8 to 128 char long.");
var length = parseInt(passwordLength, 10);
 if (length < 8){
   alert("Your password needs to be at least 8 characters.");
 }
 else if (length > 128) {
   alert("Your password needs to be 128 characters or less.");
 }
 else{
   lengthValid = true;
 }
 } while (!lengthValid);


getCriteria();
if (finalString === "") {
  getCriteria();
}
else{
writePassword();
}
