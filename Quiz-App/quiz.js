const questions = [
    {
        question:"Which country successfully landed the Chandrayaan-3 spacecraft on the Moon in 2024?",
        answers:[
            {text:"United States",correct:false},
            {text:"China",correct:false},
            {text:"India",correct:true},
            {text:"Russia",correct:false},
        ]

    },
    {
        question:"Who won the 2024 US Presidential Election?",
        answers:[
            {text:"Joe Biden",correct:false},
            {text:"Donald Trump",correct:true},
            {text:"Ron DeSantis",correct:false},
            {text:"Kamala Harris",correct:false},
        ]

    },
    {
        question:"Which city hosted the 2024 Summer Olympics?",
        answers:[
            {text:"Paris",correct:true},
            {text:"Los Angeles",correct:false},
            {text:"Tokyo",correct:false},
            {text:"Berlin",correct:false},
        ]

    },
    {
        question:"What is the name of the latest AI model released by OpenAI in 2024?",
        answers:[
            {text:"GPT-5",correct:false},
            {text:"GPT-4 Turbo",correct:true},
            {text:"Codex-2",correct:false},
            {text:"DALL-E 3",correct:false},
        ]

    },
    {
        question:"Which global organization declared a climate emergency in 2024?",
        answers:[
            {text:"United Nations",correct:true},
            {text:"World Health Organisation",correct:false},
            {text:"International Monetry Fund",correct:false},
            {text:"World Bnk",correct:false},
        ]

    },
    {
        question:"Who is the current CEO of Twitter as of 2024?",
        answers:[
            {text:"Elon Musk",correct:false},
            {text:"Parag Agrawal",correct:false},
            {text:"Linda Yaccarino",correct:true},
            {text:"Jack Dorsey",correct:false},
        ]

    },
    {
        question:"Which country won the 2024 FIFA Men's World Cup?",
        answers:[
            {text:"Brazil",correct:false},
            {text:"Germany",correct:false},
            {text:"Argentina",correct:false},
            {text:"France",correct:true},
        ]

    },
    {
        question:"What is the name of the 2024 Nobel Peace Prize winner?",
        answers:[
            {text:"Malala Yousafzai",correct:false},
            {text:"Greta Thunberg",correct:false},
            {text:"Volodymyr Zelensky",correct:true},
            {text:"António Guterres",correct:false},
        ]

    },
    {
        question:"Which major tech company acquired NVIDIA in 2024?",
        answers:[
            {text:"Apple",correct:false},
            {text:"Microsoft",correct:true},
            {text:"Google",correct:false},
            {text:"Amazon",correct:false},
        ]

    },
    {
        question:"Which nation recently became the newest member of BRICS in 2024?",
        answers:[
            {text:"Saudi Arabia",correct:false},
            {text:"Argentina",correct:true},
            {text:"Indonesia",correct:false},
            {text:"Egypt",correct:false},
        ]

    }
];

const quizBox = document.querySelector("#quiz-qns-box");
const quizQns = document.querySelector("#question");
const nextBtn = document.querySelector("#nextBtn");
const ansBtns = document.querySelector("#ans-btn");

let score = 0;
let currentQnsIndex = 0;

function startQuiz(){
    score = 0;
    currentQnsIndex = 0;
    nextBtn.innerHTML = "NEXT";
    showQns();


}

function showQns(){
    resetstate();
    let currentQns = questions[currentQnsIndex];
    let qnsNo = currentQnsIndex+1;
    quizQns.innerHTML = qnsNo + "." + currentQns.question;

    currentQns.answers.forEach((ans)=>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansBtns.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
    })
}
// console.log(ansBtns.firstChild)
function resetstate(){
    nextBtn.style.display = 'none';
    while(ansBtns.firstChild){
        ansBtns.removeChild(ansBtns.firstChild)
    }

}
function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(ansBtns.children).forEach((button)=>{
        // console.log(button)
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
        }
        button.disabled = true;
        nextBtn.style.display = "block"
    })

}

function showScore(){
    resetstate();
    quizQns.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Start Again";
    nextBtn.style.display= "block";
}
function handleNextBtn (){
    currentQnsIndex++
    if (currentQnsIndex < questions.length){
        showQns();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    
    if (currentQnsIndex < questions.length) {
        handleNextBtn();
    } else {
        // End of quiz logic here
        // alert("Quiz finished!");
        startQuiz();
    }
});

// console.log( Array.from(ansBtns.children))
startQuiz();