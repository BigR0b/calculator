"use strict";
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let num1, num2, operator, solvedNum, mathProblem;

const operate = function (o, a, b) {
  switch (o) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "÷":
      return divide(a, b);
      break;
  }
};

const calcDisplay = document.getElementById("result");
const calcInput = document.getElementById("input");
const numBtns = document.getElementsByClassName("number");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".calcSolve");
const operatorBtns = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector(".decimal");

let clearAll = function () {
  calcInput.textContent = "";
  calcDisplay.textContent = "";
  operator = "";
  num1 = "";
  num2 = "";
  mathProblem = "";
};

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function () {
    if (!calcInput.textContent) {
      calcInput.textContent += numBtns[i].value;
    } else {
      return;
    }
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
clearBtn.addEventListener("click", clearAll);

//Operator Buttons
for (let i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener("click", function () {
    if (calcInput.textContent) {
      if (!num1) {
        num1 = Number(calcInput.textContent);
        operator = operatorBtns[i].value;
        calcInput.textContent = "";
      } else if (calcDisplay.textContent) {
        num1 = Number(calcDisplay.textContent);
        num2 = "";
        calcInput.textContent = "";
        calcDisplay.textContent = "";
        operator = operatorBtns[i].value;
      }
    } else {
      return;
    }
  });
}

// Equal button
equalBtn.addEventListener("click", function () {
  if (!calcDisplay.textContent) {
    num2 = Number(calcInput.textContent);
    solvedNum = operate(operator, num1, num2);
    mathProblem = `${num1} ${operator} ${num2}`;
    calcInput.textContent = mathProblem;
    calcDisplay.textContent = solvedNum;
  } else {
    return;
  }
});
