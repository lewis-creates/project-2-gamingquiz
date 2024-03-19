const questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Graphics Card", "Random Access Memory", "Power Supply"],
        answer: 0
    },
    {
        question: "Which game was developed by Valve Corporation?",
        options: ["Call of Duty", "Battlefield", "Counter-Strike", "Half-Life"],
        answer: 2
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionElement.textContent = currentQuizQuestion.question;
    optionsElement.innerHTML = '';

    currentQuizQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            evaluateAnswer(index);
        });
        optionsElement.appendChild(button);
    });
}

function evaluateAnswer(selectedIndex) {
    const currentQuizQuestion = questions[currentQuestion];
    if (selectedIndex === currentQuizQuestion.answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect!';
    }

    nextButton.style.display = 'block';
}


loadQuestion();