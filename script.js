const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let input = "";
const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};
const calcInput = document.getElementById("input");
const calcDisplay = document.getElementById("result");
const numBtns = document.getElementsByClassName("number");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".calcSolve");
const operatorBtn = document.querySelectorAll(".operator");
// Number inputs
calcInput.textContent = "";
for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function () {
    calcInput.textContent += numBtns[i].value;
    input += numBtns[i].value;
  });
}

// Clear button
clearBtn.addEventListener("click", function () {
  calcInput.textContent = "";
  calcDisplay.textContent = "";
  input = "";
});

// Equal button
// equalButton.addEventListener("click", function(){
//     operate()
// })
