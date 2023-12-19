let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
  let clear = document.querySelector("#clear");
  let equal = document.querySelector("#equals");
  let decimal = document.querySelector("#decimal");

  let numbers = document.querySelectorAll(".numbers");
  let operators = document.querySelectorAll(".operators")

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  }));

  operators.forEach((op) => op.addEventListener("click", function(e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = `${previousValue} ${operator}`;
    currentScreen.textContent = currentValue; 
  }));
})

function handleNumber(num) {
  if(currentValue.length <= 9) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}