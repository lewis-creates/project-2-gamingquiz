// Selecting elements from the DOM
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

// Event listener for the Start button
startBtn.addEventListener("click", function() {
    instructionsArea.classList.add("active-info");
});

// Event listener for the Begin button
beginBtn.Btn.addEventListener("click", function() {
    instructionsArea.classList.remove("active-info");
    categoryArea.classList.add("active-category");
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


easyBtn.addEventListener("click", function() {
    selectedDifficulty = 'easy';
    difficultyArea.classList.remove("active-difficulty");
    startQuiz();
});

mediumBtn.addEventListener("click", function() {
    selectedDifficulty = 'medium';
    difficultyArea.classList.remove("active-difficulty");
    startQuiz();
});

hardBtn.addEventListener("click", function() {
    selectedDifficulty = 'hard';
    difficultyArea.classList.remove("active-difficulty");
    startQuiz();
});

function startQuiz() {
    console.log("Quiz started with difficulty: " + selectedDifficulty)
}

async function loadQuestion() {
    const APIUrl = 'https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}&type=multiple`;
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
