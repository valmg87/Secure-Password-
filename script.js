// Assignment Code
var generateBtn = document.querySelector("#generate");
//we need variables that give a value to lowercase, uppercase,numeric,and special character
var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function promptUser() {
var length=prompt("what length do you want your password to be? Maximum of 128 characters,with a minimum of 8 characters.");
var includeUppercase=confirm("Do you want to include uppercase letters?")
var includeNum=confirm("Do you want to include a number?")
var includeSpecialCharacterc=confirm("Do you want to include a special character?")

//below defines the array so one function is created

var userOptions={
  lenght:length,
  includeUppercase:includeUppercase,
  includeLowercase:includeLowercase,
  number:number,
  specialCharacter:specialCharter,
}
let pw_criteria=array.form(document.getElementsByName("types"))

function generatePassword() {
  let new_password = '';
  let types= [];
  total = +length.value
  pw_criteria.forEach(element => {
    if (element.checked) { i++
    }
  })
  return i

  if (element.checked) types.push(element.id);

if (+length.value % types.length > 0) {
  new_password += return_string(+length.value % types.length,"lower")

return scramble_string(new_password.split(""));

}var generateBtn=document.queryselctor("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


