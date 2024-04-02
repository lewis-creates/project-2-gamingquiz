import { customQuestions } from '.assets/js/questions.js';

// Selecting elements from the DOM
const nextBtn = document.querySelector(".next-btn");
const startBtn = document.querySelector(".start-btn");
const instructionsArea = document.querySelector(".instructions-area");
const beginBtn = document.querySelector(".begin-btn");
const categoryArea = document.querySelector(".category-area");
const difficultyArea = document.querySelector(".difficulty-area");
const gameBtn = document.querySelector(".game-btn");
const genreBtn = document.querySelector(".genre-btn");
const hardwareBtn = document.querySelector(".hardware-btn");
const historyBtn = document.querySelector(".history-btn");
const easyBtn = document.querySelector(".easy-btn");
const mediumBtn = document.querySelector(".medium-btn");
const hardBtn = document.querySelector(".hard-btn");

// Placeholder variables for selected category and difficulty
let selectedCategory = '';
let selectedDifficulty = '';
let questionNumber = 1;

// Event listener for the Start button
startBtn.addEventListener("click", function() {
    instructionsArea.classList.add("active-info");
    header-main.classList.add("activeHeader");
    footer-basic.classList.add("activeFooter");
});

// Difficulty Select Buttons Easy / Medium / Hard
easyBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("activeDifficulty");
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'easy';
    loadQuestion().then(() => {
        showQuestion();
    });
});

mediumBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("activeDifficulty");
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'medium';
    loadQuestion().then(() => {
        showQuestion();
    });
});

hardBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("activeDifficulty");
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'hard';
    loadQuestion().then(() => {
        showQuestion();
    });
});

//Quiz next button
nextBtn.addEventListener("click", () => {
    if (questionNumber < questionsList.length) {
        currentIndex += 1;
        questionNumber += 1;
        questionCounter(question_number);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(progressLine);
        startTimerLine(widthValue);
        nextBtn.style.display = "none";
        showQuestion();
    } else {
        console.log("Questions complete!");
        showResultArea();

    }

});


// Event listener for the Begin button
beginBtn.addEventListener("click", () => {
    instructionsArea.classList.remove("activeInfo");
    categoryArea.classList.add("activeCategory");
});

// Category selection logic
gameBtn.addEventListener("click", function() {
    selectedCategory = 'game';
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
});

// Difficulty selection logic 
genreBtn.addEventListener("click", function() {
    selectedCategory = 'genre';
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
});

hardwareBtn.addEventListener("click", function() {
    selectedCategory = 'hardware';
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
});

historyBtn.addEventListener("click", function() {
    selectedCategory = 'history';
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
});



function startQuiz() {
    if (selectedCategory === 'games') {
        loadQuestion('15');
    } else {
        questionsList = customQuestions[selectedCategory] || [];
        currentIndex = 0;
        showQuestion();
    }
}

async function loadQuestion(categoryId) {
    const APIUrl = `https://opentdb.com/api.php?amount=20&category=15&type=multiple`;
    console.log("Fetching questions from:", APIUrl);
    try {
        const response = await fetch(APIUrl);
        const data = await response.json();
        questionsList = data.results;
        currentIndex = 0;
        showQuestion();
    } catch (error) {
        console.error("Error loading questions:", error);
    }
}

function showQuestion() {
    const question = questionsList[currentIndex];
    questionElement.innerHTML = question.question;
    options.innerHTML = question.incorrect_answers
        .concat(question.correct_answer)
        .sort(() => 0.5 - Math.random())
        .map(option => `<li class="option">${option}</li>`)
        .join('');

    attachOptionListeners(); // Set up listeners for each option 
}

function optionSelected(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = questionsList[currentIndex].correct_answer;

    if(selectedOption === correctAnswer) {
        userScore += 1;
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect")
    }

    document.querySelectorAll(".option").forEach(opt => opt.classList.add("disabled"));

    if(currentIndex < questionsList.length - 1) {
        next_btn.style.display = "block";
    } else {
        showResultsArea();
    }
}

function disableOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.classList.add("disabled");
        option.removeEventListener('click', optionsSelected);
    });
}