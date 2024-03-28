const startBtn = document.querySelector(".start-btn");
const instructionsArea = document.querySelector(".instructions-area");
const beginBtn = document.querySelector(".begin-btn");
const categoryArea = document.querySelector(".category-area");
const difficultyArea = document.querySelector(".difficulty-area");
const gameBtn = document.querySelector(".game-btn");
const genreBtn = document.querySelector(".genre-btn");
const hardwareBtn = document.querySelector(".hardware-btn");
const historyBtn = document.querySelector(".history-btn");

let selectedCategory = '';

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