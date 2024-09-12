function analogStart(){
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");

const digiHours = document.getElementById("hours");
const digiMinutes = document.getElementById("minutes");
const digiSeconds = document.getElementById("seconds");
const digiAMPM = document.getElementById("ampm");

let time = new Date();


let minute = time.getMinutes() * 6;
let hour = time.getHours() * 30;
let second = time.getSeconds() * 6;

// console.log(minute, hour, second);

// console.log(`${hour+ (minute/12)}deg`);
// console.log(`${minute}deg`);
// console.log(`${second}deg`);

hr.style.transform = `rotateZ(${hour+ (minute/12)}deg)`;
min.style.transform = `rotateZ(${minute}deg)`;
sec.style.transform = `rotateZ(${second}deg)`;


let digihour = time.getHours();
let digiMinute = time.getMinutes();
let digiSecond = time.getSeconds();


if(digihour < 10){
    digiHours.innerHTML = "0" + digihour + ":";
}else{
    digiHours.innerHTML = digihour + ":";
}
if(digiMinute < 10){
    digiMinutes.innerHTML = "0" + digiMinute + ":";
}else{
    digiMinutes.innerHTML = digiMinute + ":";
}
if(digiSecond < 10){
    digiSeconds.innerHTML = "0" + digiSecond;
}else{
    digiSeconds.innerHTML = digiSecond;
}

if(digihour >12){
    digiAMPM.innerHTML = "PM";
}else{
    digiAMPM.innerHTML = "AM";
}

}
// analogStart()
setInterval(()=>{
    analogStart()
})


