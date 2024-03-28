const startBtn = document.querySelector(".start-btn");
const instructionsArea = document.querySelector(".instructions-area");
const beginBtn = document.querySelector(".begin-btn");
const categoryArea = document.querySelector(".category-area");

startBtn.addEventListener("click", function() {
    instructionsArea.classList.add("active-info");
});

beginBtn.Btn.addEventListener("click", function() {
    instructionsArea.classList.remove("active-info");
    categoryArea.classList.add("active-category");
});