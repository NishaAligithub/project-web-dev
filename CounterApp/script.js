const countLabel = document.getElementById("countLabel");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countLabel.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countLabel.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countLabel.textContent = count;
});