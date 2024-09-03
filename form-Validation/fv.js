const nameError = document.querySelector("#nameError");
const phoneError = document.querySelector("#phoneError");
const emailError = document.querySelector("#emailError");
const mesError = document.querySelector("#mesError");
const submitErr = document.querySelector("#submitErr");

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phoneNumber");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const form = document.querySelector("form")
const submitBtn = document.querySelector("#submitBtn");

function validateName(){
    let name = nameInput.value.trim();
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)){
        nameError.innerHTML = "Enter full name";
        return false;
    }
    nameError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
    return true;
}

nameInput.addEventListener("keyup", validateName);

function validatePhoneNumber(){
    let phoneNumber = phoneInput.value.trim();
    if(phoneNumber.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if(phoneNumber.length !== 10){
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    if(!phoneNumber.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits are allowed";
        return false;
    }
    phoneError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
    return true;
}

phoneInput.addEventListener("keyup", validatePhoneNumber);

function validateEmail(){
    let email = emailInput.value.trim();
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "Enter a valid email address";
        return false;
    }
    emailError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
    return true;
}

emailInput.addEventListener("keyup", validateEmail);
 

function validateMessage(){
    let message = messageInput.value;
    let requiredNum = 30;
    let left = requiredNum - message.length;

    if(left >0){
        mesError.innerHTML = left + "more Characters Required";
        return false;
    }

    mesError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
    return true;

}

messageInput.addEventListener("keyup", validateMessage);

function validateForm(e){
    submitErr.innerHTML ="";
    if(!validateName() || !validatePhoneNumber() || !validateEmail() || !validateMessage()){
        submitErr.innerHTML = "Please Fix Error To Submit";
        e.preventDefault();
        return false;
    }
    return true;
}

form.addEventListener("submit",validateForm);