const nextBtn = document.querySelector(".next_btn");
const startBtn = document.querySelector(".start_btn");
const instructionsArea = document.querySelector(".instructions-area");
const beginBtn = document.querySelector(".begin-btn");
const gameArea = document.querySelector(".game_area");
const optionList = document.querySelector(".option_list");
const options = document.querySelector('.option_list');
const exitBtn = document.querySelector(".exit_btn");
const timerNum = document.querySelector(".progress_text");
const timeLine = document.querySelector(".progress_bar");
const resultArea = document.querySelector(".result-area");
const headerMain = document.querySelector(".header-main");
const footerBasic = document.querySelector(".footer-basic");
const quitBtn = document.querySelector(".quit");
const difficultyArea = document.querySelector(".difficulty-area");
const categoryArea = document.querySelector(".category-area");
const easyBtn = document.querySelector(".easy-btn");
const mediumBtn = document.querySelector(".medium-btn");
const hardBtn = document.querySelector(".hard-btn");
const genreBtn = document.querySelector(".genre-btn");
const gameBtn = document.querySelector(".game-btn");
const hardwareBtn = document.querySelector(".hardware-btn");
const historyBtn = document.querySelector(".history-btn");

// If the start button is clicked 
startBtn.addEventListener("click", () => {
    instructionsArea.classList.add("activeInfo");
    headerMain.classList.add("activeHeader");
    footerBasic.classList.add("activeFooter");
});

// Difficulty Select Buttons Easy / Medium / Hard
easyBtn.addEventListener("click", () => {
    selectDifficulty('easy');
});

mediumBtn.addEventListener("click", () => {
    selectDifficulty('medium');
});

hardBtn.addEventListener("click", () => {
    selectDifficulty('hard');
});

function selectDifficulty(selectedDifficulty) {
    difficultyArea.classList.remove("activeDifficulty");
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.add("activeGame");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = selectedDifficulty;
    loadQuestion().then(() => {
        showQuestion();
    });
}

// Quiz next button
nextBtn.addEventListener("click", () => {
    if (questionNumber < questionsList.length) {
        currentIndex += 1;
        questionNumber += 1;
        questionCounter(questionNumber);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(progressLine);
        startTimerLine(widthValue);
        nextBtn.computedStyleMap.display = "none";
        showQuestion();
    } else {
        console.log("Questions complete!");
        showResultArea();
    }
});

// Move to category select on click 
beginBtn.addEventListener("click", () => {
    instructionsArea.classList.remove("activeInfo");
    categoryArea.classList.add("activeCategory");
});

// Category buttons 
genreBtn.addEventListener("click", () => {
    selectCategory('Genre');
});

gameBtn.addEventListener("click", () => {
    selectCategory('Games');
});

hardwareBtn.addEventListener("click", () => {
    selectCategory('Hardware');
});

historyBtn.addEventListener("click", () => {
    selectCategory('History');
});

function selectCategory(selectedCategory) {
    categoryArea.classList.remove("activeCategory");
    difficultyArea.classList.add("activeDifficulty");
    category = '15';
    heading.innerText = selectCategory;
}
