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

let selectedCategory = '';
let selectedDifficulty = '';

startBtn.addEventListener("click", function() {
    instructionsArea.classList.add("active-info");
});

beginBtn.Btn.addEventListener("click", function() {
    instructionsArea.classList.remove("active-info");
    categoryArea.classList.add("active-category");
});

gameBtn.addEventListener("click", function() {
    selectedCategory = 'game';
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
});

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

