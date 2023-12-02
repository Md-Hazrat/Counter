const mainTitle = document.querySelector("#title");
let currentValue = 0;

const btndecrement = document.querySelector("#decrement");
const btnincrement = document.querySelector("#increment");
const btnreset = document.querySelector("#reset");

btnincrement.addEventListener('click', () => {
    currentValue++;
    mainTitle.textContent = currentValue;
});


btndecrement.addEventListener('click', () => {
    currentValue--;
    mainTitle.textContent = currentValue;
});

btnreset.addEventListener('click', () => {
    currentValue = 0;
    mainTitle.textContent = currentValue;
});