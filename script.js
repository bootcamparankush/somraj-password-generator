
var passwordLength = 8;
var passwordChoicearray = [];

//declaring arrays for lower/uppercase letters, numbers and special characters.
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArray =   ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArray = ["!","@","#","$","%","^","&","*","(",")","[","]","|","?","/","","<",">","'","+","=","-",";",":","~"];

// Assignment Code - Started code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  
  var validPrompts = getUserPrompts ();
  var passwordText = document.querySelector("#password");

if (validPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

//function to generate random password based on userPrompts.

function generatePassword () {

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random () * passwordChoicearray.length);

    password = password + passwordChoicearray [randomCharacter];
  }
  return password;

};

//function to prompt user input(s) for four various combinations

function getUserPrompts (){
  
  passwordChoicearray = [];
  
  //parseInt converts into a number if the user enteres anything other than number
  passwordLength = parseInt(prompt("How many characters of length you want your password to be. Choose between 8 to 128 characters")); 
  
  
  //validate if the password is between 8 and 128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
    alert ("Password length needs to be a number between 8 to 128 digits. Please re-enter and try again")
    return false;
  }
 
// console.log (getUserPrompts);

  //prompts for lower case letters
 if( confirm ("Do you want the password to consist of lower case letters?")) {
    passwordChoicearray = passwordChoicearray.concat(lowerCaseArray);
  //  console.log (passwordChoicearray); 
  }
//prompts for upper case letters 
  if( confirm ("Do you want the password to consist of  upper case letters?")) {
    passwordChoicearray = passwordChoicearray.concat(upperCaseArray);
    // console.log (passwordChoicearray);
  }
//prompts for numbers
  if( confirm ("Do you want the password to consist of numbers?")) {
    passwordChoicearray = passwordChoicearray.concat(numbersArray);
    console.log (passwordChoicearray);
  }
//prompts for special characters
  if( confirm ("Do you want the password to consist of  special characters ?")) {
    passwordChoicearray = passwordChoicearray.concat(specialCharArray);
    // console.log (passwordChoicearray);
  }
  //if no choices are made by the user in the prompts options there is no password generated and user is alerted accordingly
  
  if (passwordChoicearray.length == 0) {
    alert("Alert: Note that there are no choices selected hence there is no password generated. Please try again.");
    return false;
  } 
  return true;
}