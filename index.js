let passwordLength = 8;
const passRangeinputEl = document.getElementById("passRangeInput")
const passRangeValueEl = document.getElementById("passRangeValue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");
let isUpperCase = false;
let isNumber = false;
let isSymbol = false;


const generatePassword = (passLength) => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters =isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumber ? "1234567890" : "";
  const symbols = isSymbol ? "@!#$%^&*()_+" : "";


  const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  let password = "";
  for(let i = 0; i < passLength; i++) {
    const charIndex = Math.floor(Math.random()* passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;

}








passRangeinputEl.addEventListener("input",(e) =>{
  passwordLength = +e.target.value;
  passRangeValueEl.innerText=passwordLength;
});
genBtn.addEventListener('click', () => {
  const upperCaseCheckEl = document.getElementById("uppercase");
  const numbersCaseCheckEl = document.getElementById("numbers");
  const symbolsCaseCheckEl = document.getElementById("symbols");

  isUpperCase = upperCaseCheckEl.checked;
  isNumber = numbersCaseCheckEl.checked;
  isSymbol = symbolsCaseCheckEl.checked ;


  const passwordEl = document.getElementById('password');
  const password = generatePassword(passwordLength);
  passwordEl.innerHTML = password;
  console.log(password);

})
passwordEl.addEventListener("click", (e) => {
  if (e.target.innerText.length > 0) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        alert("could not copy");
      });
  }
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}