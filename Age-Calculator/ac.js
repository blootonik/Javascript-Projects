const calculateBtn = document.querySelector("#calculateBtn");
const ageOutput = document.querySelector("#age-output");
const ageInput = document.querySelector("#dob-input");

function calculateAge (){
    let dob = ageInput.value;
    let dobInput = new Date(dob);

    let dobDay = dobInput.getDate()
    let dobMonth = dobInput.getMonth() + 1;
    let dobYear = dobInput.getFullYear();


    // console.log("day :", day)
    // console.log("month :", month)
    // console.log("year :", year)
    if(!dob){
        ageOutput.innerHTML = `<span>DOB Input Cannot Be Empty</span>`
        
        return;
    }

    let currentDate = new Date();
    let currentDay  = currentDate.getDate();
    let currentMonth  = currentDate.getMonth() + 1;
    let currentYear  = currentDate.getFullYear();
    // console.log(currentDay, currentMonth, currentYear);

    if(dobInput >= currentDate){    
        ageOutput.innerHTML = `<span>Please Input Correct DOB !! </span>`
        ageInput.value = "";
        return;
    }

    // if(dobDay >=currentDay)
    let dayDiff = currentDay - dobDay;
    let monthDiff = currentMonth - dobMonth;
    let yearDiff = currentYear - dobYear;

    // console.log(dayDiff, monthDiff , yearDiff)

    if(dayDiff < 0 ){
        monthDiff --;
        let lastDayOfPreviousMonth = new Date(currentYear, currentMonth-1, 0).getDate();
        dayDiff += lastDayOfPreviousMonth;
    }
    if(monthDiff < 0){
        yearDiff--;
        monthDiff+= 12;

    }
    
     ageOutput.innerHTML  =  `You Are <span>${yearDiff} Years</span> , <span>${monthDiff} Months</span> And <span>${dayDiff} Days</span> Old`;
     ageInput.value = "";
    


}

calculateBtn.addEventListener("click",()=>{
    calculateAge();

})


ageInput.addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        calculateAge();
    }
})
