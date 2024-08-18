const cirlce = document.querySelectorAll(".circle");

cirlce.forEach(function(event){
    let degree = 0;
    let targetDegree = event.getAttribute("data-degree");
    let color = event.getAttribute("data-color");

    let number = event.querySelector('.number');

    let interval = setInterval(() => {
        degree += 1;
        if(degree > targetDegree){
            clearInterval(interval)
            return;


        }
        event.style.background = `conic-gradient(${color} ${degree}%, #000 0%)`
        number.innerHTML = degree + "<span>%</span>";
        number.style.color= color;
    }, 100);

})