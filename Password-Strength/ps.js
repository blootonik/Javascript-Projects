const password = document.querySelector("#password");
const message = document.querySelector(".pass-strength-info");
const strength = document.querySelector("#strength");

function showStrength(){
    if(password.value.length < 4){
        message.style.display = 'block';
        message.style.color = "red";
        password.style.border="3px solid red"
        strength.innerHTML = "Weak";
    }
    else if(password.value.length >= 5 & password.value.length <10){
        message.style.display = 'block';
        message.style.color = "yellow";
        password.style.border="3px solid yellow"
        strength.innerHTML = "Medium";
    }
    else if(password.value.length >= 10){
        message.style.display = 'block';
        message.style.color = "green";
        password.style.border="3px solid green"
        strength.innerHTML = "Strong";
    }
}

password.addEventListener("keyup",showStrength);