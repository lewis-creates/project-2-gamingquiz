// Selecting elements from the DOM
const next_btn = document.querySelector(".next_btn");
const start_btn = document.querySelector(".start_btn");
const instructions_area = document.querySelector(".instructions_area");
const begin_btn = document.querySelector(".begin_btn");
const game_area = document.querySelector(".game_area");
const option_list = document.querySelector(".option_list");
const options = document.querySelector('.option-list');
const exit_btn = document.querySelector(".exit_btn");
const timer_num = document.querySelector(".progress_text");
const time_line = document.querySelector(".progress_bar");
const result_area = document.querySelector(".result_area");
const header_main = document.querySelector(".header_main");
const footer_basic = document.querySelector(".footer_basic");
const quit = document.querySelector(".quit");
const difficulty_area = document.querySelector(".difficulty_area");
const category_area = document.querySelector(".category_area");
const easy_btn = document.querySelector(".easy_btn");
const medium_btn = document.querySelector(".medium_btn");
const hard_btn = document.querySelector(".hard_btn");
const sci_btn = document.querySelector(".sci_btn");
const games_btn = document.querySelector(".games_btn");
const film_btn = document.querySelector(".film_btn");
const general_btn = document.querySelector(".general_btn");

let heading = document.getElementById("quiz_cat_heading");
let questionElement = document.getElementById('question');
let questionsList = [];
let currentIndex = 0;
let question_number = 1;
let counter;
let widthValue = 100;
let timeValue = 15;
let progressLine;
let userScore = 0;
let opt;
let difficulty = 'easy';
let category = '1';

// Event listener for the Start button
startBtn.addEventListener("click", function() {
    instructionsArea.classList.add("active-info");
});

// Difficulty Select Buttons Easy / Medium / Hard
easyBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("active-difficulty");
    instructionsArea.classList.remove("active-info");
    gameArea.classList.add("active-game");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'easy';
    loadQuestion().then(() => {
        showQuestion();
    });
});

mediumBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("active-difficulty");
    instructionsArea.classList.remove("active-info");
    gameArea.classList.add("active-game");
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
    difficulty = 'medium';
    loadQuestion().then(() => {
        showQuestion();
    });
});

hardBtn.addEventListener("click", () => {
    difficultyArea.classList.remove("active-difficulty");
    instructionsArea.classList.remove("active-info");
    gameArea.classList.add("active-game");
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
    instructionsArea.classList.remove("active-info");
    categoryArea.classList.add("active-category");
});

// Category selection logic
gameBtn.addEventListener("click", () => {
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
    category = '17';
    heading.innerText = "Games";
});


genreBtn.addEventListener("click", () => {
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
    category = '15';
    heading.innerText = "Genre";
});

hardwareBtn.addEventListener("click", () => {
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
    category = '11';
    heading.innerText = "Hardware";
});

historyBtn.addEventListener("click", () => {
    categoryArea.classList.remove("active-category");
    difficultyArea.classList.add("active-difficulty");
    category = '9';
    heading.innerText = "History";
});

// Reloads the winodw on resart test button click
quit.addEventListener("click", () => {
    window.location.reload();
});

//Exits the quiz to start
exitBtn.addEventListener("click", () => {
    instructionsArea.classList.remove("active-info");
});

async function loadQuestion(categoryId) {
    if (categoryId) {
        const APIUrl = `https://opentdb.com/api.php?amount=20&category=9&type=multiple`;
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
    } else {
        questionsList = customQuestions; 
        currentIndex = 0;
        showQuestion();
    }
}

// Display Question and options
function showQuestion() {
    let question = questionsList[currentIndex];
    let correctAnswer = question.correct_answer;
    let incorrectAnswer = question.incorrect_answers;

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

 //timer function.
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timerNum.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timerNum.textContent = "0";

            // Selects correct answer when timer runs out and stops user selecting an answer.
            let correctAns = questionsList[currentIndex].correct-answer;
            let allOptions = options.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (optionsList.children[i].textContent == correctAns) {
                    options.children[i].classList.add("correct");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled");
            }

            //next button appears when answer selected
            nextBtn.style.display = "block";
        }
    }
}

function startTimerLine(time) {
    progressLine = setInterval(timer, 160);
    time = 100;
    function timer() {
        time--;
        timeLine.style.width = time + "%";
        if (time > 500) {
            clearInterval(progressLine);
        }
    }
}
