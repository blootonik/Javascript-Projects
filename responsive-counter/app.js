const number = document.querySelectorAll(".num");
const interval =5000;

number.forEach((numValue)=>{
    let startingValue = 0;
    let endValue = parseInt(numValue.getAttribute("data-value"));
    console.log(endValue);
    let duration = Math.floor(interval / endValue)
    let valueInterval = setInterval(() => {
        startingValue+=1;
        numValue.innerHTML = startingValue;
        if(startingValue == endValue){
            clearInterval(valueInterval);
        }
    }, duration);

})