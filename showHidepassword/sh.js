const password = document.querySelector("#password");
const showPass = document.querySelector("#showPass");
const hidePass = document.querySelector("#hidePass");

// let a =  password.getAttribute("type");
function showPassword(){
    password.setAttribute("type", "text");
    showPass.style.display = "none";
    hidePass.style.display= "block";

}
function hidePassword(){
    password.setAttribute("type", "password");
    hidePass.style.display= "none";
    showPass.style.display = "block";
}

showPass.addEventListener("click",showPassword )
hidePass.addEventListener("click",hidePassword )
