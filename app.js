// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

const changeColourBtn = document.getElementById("colour-btn");
const textToChange = document.querySelector(".text")
changeColourBtn.addEventListener('click', handleUserClick);

function handleUserClick(){
    textToChange.classList.toggle('newColour');
}