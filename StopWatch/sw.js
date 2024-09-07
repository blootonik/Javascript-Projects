const time = document.getElementById("time");
const stopBtn = document.getElementById("stopBtn");
const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");

let [sec, min , hour] = [0,0,0];
let timer = null;
function stopWatch(){
    sec ++;
    if(sec == 60){
        min ++;
        sec= 0;
        if(min == 60){
            hour++;
            min = 0;
        }
    }
    let seconds = sec < 10 ? "0" + sec : sec;
    let minutes = min < 10 ? "0" + min : min;
    let hours = hour < 10 ? "0" + hour : hour;

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function startWatch(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch , 1000);
}

function stopTimer(){
    clearInterval(timer);
}

function resetTimer(){
    clearInterval(timer);
    [sec, min , hour] = [0,0,0];
    time.innerHTML = `00:00:00`;

}

playBtn.addEventListener("click", startWatch);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);