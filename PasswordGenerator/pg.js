const passwordOutput = document.querySelector("#password-input");
const generatePasswordBtn = document.querySelector("#generatePasswordBtn");
const copyBtn = document.querySelector(".copy-icon");
const tickMark = document.querySelector(".tickmark-icon");

const passwordLength = 11;

let smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
let capsAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChars = "!~@$#&%\/><?*+";

let allChars = smallAlphabets + capsAlphabets + numbers + specialChars;

function generatePassword(){
    let password= "" ;

    password += smallAlphabets[Math.floor(Math.random()* smallAlphabets.length)];
    password += capsAlphabets[Math.floor(Math.random()* capsAlphabets.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    password += specialChars[Math.floor(Math.random()* specialChars.length)];
    

    while (password.length < passwordLength) {
        password += allChars[Math.floor(Math.random()* allChars.length)];
        
    }
    passwordOutput.value = password;
}



function copyPassword(){
    passwordOutput.select();
    document.execCommand("copy");
    copyBtn.style.display = "none";
    tickMark.style.display = "block";

    setTimeout(()=>{
        tickMark.style.display = "none";
        copyBtn.style.display = "block";
    },2000);

}

generatePasswordBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
