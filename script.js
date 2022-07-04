const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let num1, num2, operator, input;

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
const operatorBtns = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector(".decimal");

let clearAll = function () {
  calcInput.textContent = "";
  calcDisplay.textContent = "";
  input = "";
  operator = "";
  num1 = "";
  num2 = "";
};

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function () {
    calcInput.textContent += numBtns[i].value;
  });
}

//Decimal button
decimalBtn.addEventListener("click", function () {
  if (!calcInput.textContent.includes(".")) {
    calcInput.textContent += ".";
  } else {
    return;
  }
});

// Clear button
clearBtn.addEventListener("click", function () {
  clearAll();
});

//Operator Buttons
for (let i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener("click", function () {
    if (calcInput.textContent) {
      if (!num1) {
        num1 = Number(calcInput.textContent);
        operator = operatorBtns[i].value;
        calcInput.textContent = "";
      } else {
        return;
      }
    } else {
      return;
    }
  });
}

// Equal button
equalBtn.addEventListener("click", function () {
  operate();
});
