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
{

    question: "43+242",
    correct: 285,
    answers: [284,283,282,285],
},
{

    question: "16+17",
    correct: 33,
    answers: [32,3,31,33],
},
];


function generateQuestion()
{
let question = allQues[currentQues].question;
main.innerHTML = `<h1 class="my-5" style="font-size:100px !important">${question}</h1>`;

let answers = allQues[currentQues].answers;
let btn_block = "";

for (let i of answers)
{
btn_block += `<button class="btn btn-outline-primary fs-1" onclick="checkQuestion(${i})">${i}</button>`;
}

main.innerHTML += `<nav class="d-flex justify-content-between" style="width: 50vw !important">${btn_block}</nav`;
}


function startProgram() {
    start.classList.add("none");
    main.classList.remove("none");
    result.classList.add("none");
    generateQuestion();
}

function checkQuestion(num)
{
correct = allQues[currentQues].correct;
if (num == correct)
{
countSucces +=1;    
}
currentQues+=1;
if(allQues.length > currentQues)
{
generateQuestion();

}
else
{
stopQuiz();

}
}

function stopQuiz()
{
    start.classList.remove("none");
    main.classList.add("none");
    result.classList.remove("none");
    result.innerText = `Решено ${countSucces} из ${allQues.length}`;
    currentQues = 0;
    countSucces = 0;
}


