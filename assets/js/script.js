
// Selecting elements from the DOM
const nextBtn = document.querySelector(".next-btn");
const startBtn = document.querySelector(".start-btn");
const instructionsArea = document.querySelector(".instructions-area");
const beginBtn = document.querySelector(".begin-btn");
const gameArea = document.querySelector(".game-area");
const optionList = document.querySelector(".option-list");
const options = document.querySelector('.option-list');
const exitBtn = document.querySelector(".exit-btn");
const timerNum = document.querySelector(".progress-text");
const timeLine = document.querySelector(".progress-bar");
const resultArea = document.querySelector(".result-area");
const headerMain = document.querySelector(".header-main");
const footerBasic = document.querySelector(".footer-basic");
const quit = document.querySelector(".quit");
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
    headerMain.classList.add("activeHeader");
    footerBasic.classList.add("activeFooter");
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
gameBtn.addEventListener("click", () => {
    categoryArea.classList.remove("activeCategory");
    difficultyArea.classList.add("activeDifficulty");
    category = '17';
    heading.innerText = "Games";
});


genreBtn.addEventListener("click", () => {
    categoryArea.classList.remove("activeCategory");
    difficultyArea.classList.add("activeDifficulty");
    category = '15';
    heading.innerText = "Genre";
});

hardwareBtn.addEventListener("click", () => {
    categoryArea.classList.remove("activeCategory");
    difficultyArea.classList.add("activeDifficulty");
    category = '11';
    heading.innerText = "Hardware";
});

historyBtn.addEventListener("click", () => {
    categoryArea.classList.remove("activeCategory");
    difficultyArea.classList.add("activeDifficulty");
    category = '9';
    heading.innerText = "History";
});

// Reloads the winodw on resart test button click
quit.addEventListener("click", () => {
    window.location.reload();
});

//Exits the quiz to start
exitBtn.addEventListener("click", () => {
    instructionsArea.classList.remove("activeInfo");
});

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

// Display Question and options
function showQuestion() {
    let question = questionsList[currentIndex];
    let correctAnswer = question.correct-answer;
    let incorrectAnswer = question.incorrect-answers;

    // Shuffle the incorrect answers array
    incorrectAnswer.sort(() => Math.random() - 0.5);
    let optionsList = incorrectAnswer.slice(0, 3);
    optionsList.push(correctAnswer);
    optionsList.sort(() => Math.random() - 0.5);
    questionElement.innerHTML = `${question.question}`;
    options.innerHTML = `${optionsList.map((option) => `<li class="option">${option}</li>`).join('')}`;

    opt = document.querySelectorAll(".option");
    for (let i = 0; i < opt.length; i++) {
        opt[i].addEventListener("click", optionSelected);
    }
    attachOptionListeners();
}

function optionSelected(event) {
    console.log(event.target.textContent);
    clearInterval(counter);
    clearInterval(progressLine);
    let userAns = event.target.textContent;
    let correctAns = questionsList[currentIndex].correct-answer;
    let allOptions = options.children.length;
    console.log(allOptions);
	
	 if (userAns === correctAns) {
        userScore += 1;
        console.log(userScore);
        event.target.classList.add("correct");
        console.log("Answer is Correct!");
        console.log(correctAns);
        console.log('Are they equal?', userAns === correctAns);
    } else {
        event.target.classList.add("incorrect");
        console.log("Answer is wrong!");
        console.log(correctAns);
        console.log('Are they equal?', userAns === correctAns);
    }
    //once selected, disable all other options
    for (let i = 0; i < allOptions; i++) {
        if (options.children[i].textContent == correctAns) {
            options.children[i].classList.add("correct");
        }
    }

    // if incorrect answer, show all correct answers
    for (let i = 0; i < allOptions; i++) {
        options.children[i].classList.add("disabled");
    }

    nextBtn.style.display = "block";
}

// top questions counter 
function questionCounter(questionNumber) {
    const top_q_counter = game_area.querySelector(".total-questions");
    let totalQTag = (`<span><p> ${questionNumber} </p>of<p> ${questionsList.length} </p>Questions</span>`);
    top_q_counter.innerHTML = totalQTag;
}

// Display the results area at the end of the quiz
function showResultArea() {
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.remove("activeGame");
    resultArea.classList.add("activeResult");

}

//Results area Function and add active results window
function showResultArea() {
    instructionsArea.classList.remove("activeInfo");
    gameArea.classList.remove("activeGame");
    resultArea.classList.add("activeResult");

    const scoreText = resultArea.querySelector(".score-value");

    if (userScore) {
        let scoreTag = (`<span><p> ${userScore} </p> out of <p> ${questionsList.length}</p></span>`);
        scoreText.innerHTML = scoreTag;
    }

    //Calculate percentage function and round to whole number
    let percentage = function calculatePercentage(x, y) {
        return Math.round((x / y) * 100);
    };

     // store percentage function result and put into HTML
     let result = percentage(userScore, questionsList.length) + "%";
     const percentText = document.querySelector(".percentage");
 
     let percentTag = (`<span>Percentage<p> ${result} </p><span>`);
     percentText.innerHTML = percentTag;
 
     //Generaging a grade from the users percentage
     const gradeText = document.querySelector(".grade");
 
     if (result >= 70 + '%') {
         let gradeTag = (`<span>Grade<p> ${'A'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     } else if (result >= 60 + '%') {
         let gradeTag = (`<span>Grade<p> ${'B'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     } else if (result >= 50 + '%') {
         let gradeTag = (`<span>Grade<p> ${'C'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     } else if (result >= 40 + '%') {
         let gradeTag = (`<span>Grade<p> ${'D'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     } else if (result >= 30 + '%') {
         let gradeTag = (`<span>Grade<p> ${'E'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     } else if (result < 29 + '%') {
         let gradeTag = (`<span>Grade<p> ${'U'} </p></span>`);
         gradeText.innerHTML = gradeTag;
     }
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