// script.js
const questions = [
    { question: "What keyword is used to declare a Constant in JavaScript?", answer: "const" },
    { question: "Which method is used to print something to the console?", answer: "console.log" },
    { question: "What are spelling errors in code called (1 word)?", answer: "syntax" },
    { question: "What number system is base 2?", answer: "binary" },
    { question: "What number system is base 8?", answer: "octal" },
    { question: "What number system is base 16?", answer: "hexadecimal" },
    { question: "How do you do exponents in Java?", answer: "**" },
    { question: "What is a list of data items under one variable called?", answer: "array" },
    { question: "What is a reusable block of code called?", answer: "function" },
    { question: "What the browser's internal representation of the document's HTML structure as a hierarchy of objects ( 3 letter acronym)?", answer: "dom" },
    { question: "What what is it called when you iterate through code over and over?", answer: "loop" },
    { question: "What statement allows Java to make decisions?", answer: "conditional" },
    { question: "What is used to store data?", answer: "variable" },
    { question: "How do you perform addition in Javascript?", answer: "+" },
    { question: "How do you perform subtraction in Javascript?", answer: "-" },
    { question: "How do you perform multiplication in Javascript?", answer: "*" },
    { question: "How do you perform division in Javascript?", answer: "/" },
    { question: "How do you perform remainder division in Javascript?", answer: "%" },
    { question: "How do you test if 2 values are equal and have the same type?", answer: "===" },
    { question: "What is it called when you put two string together to form one?", answer: "concatenation" },
];

let score = 0;
let currentQuestionIndex = 0;

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        let userAnswer = prompt(questions[currentQuestionIndex].question);
        checkAnswer(userAnswer);
    } else {
        alert(`Game Over! Your final score is ${score}/${questions.length}`);
    }
}

function checkAnswer(userAnswer) {
    if (userAnswer && userAnswer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        alert("Correct!");
        score++;
    } else {
        alert(`Wrong! The correct answer is: ${questions[currentQuestionIndex].answer}`);
    }
    currentQuestionIndex++;
    askQuestion();
}

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffleQuestions();
    askQuestion();
}
