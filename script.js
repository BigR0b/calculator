const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let num1, num2, operator;
let input = "";
// switch (operator) {
//   case "+":
//     a + b;
//     break;
//   case "-":
//     a - b;
//     break;
//   default:
//     break;
// }
const calcInput = document.getElementById("input");
const calcDisplay = document.getElementById("result");
const numBtns = document.getElementsByClassName("number");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".calcSolve");
const operatorBtn = document.querySelectorAll(".operator");

let clearAll = function () {
  calcInput.textContent = "";
  calcDisplay.textContent = "";
  input = "";
  operator = "";
};
// Number inputs
for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function () {
    calcInput.textContent += numBtns[i].value;
    input += numBtns[i].value;
  });
}

// Clear button
clearBtn.addEventListener("click", function () {
  clearAll();
});

// Equal button
equalBtn.addEventListener("click", function () {
  operate();
});
