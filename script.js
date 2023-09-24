let start = document.getElementById("startBtn");
let main = document.getElementById("main");
let result = document.getElementById("result");

start.addEventListener("click", startProgram);


let currentQues = 0;
let countSucces = 0;
let allQues = [
{
question: "-2+3",
correct: 1,
answers: [4,6,1,-2],

},
{

    question: "43+241",
    correct: 284,
    answers: [324,401,274,284],
},
];


function generateQuestion()
{
let question = allQues[currentQues].question;
main.innerHTML = `<h1 class="question">${question}</h1>`;

let answers = allQues[currentQues].answers;
let btn_block = "";

for (let i of answers)
{
btn_block += `<button class="btn" onclick="checkQues(${i})">${i}</button>`;
}

main.innerHTML += `<nav class="btn_block">${btn_block}</nav`;
}


function startProgram() {
    start.classList.add("none");
    main.classList.remove("none");
    result.classList.add("none");
}


