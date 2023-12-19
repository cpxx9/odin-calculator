let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
  let clear = document.querySelector("#clear");
  let equals = document.querySelector("#equals");
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
    if(operator === "X") {
      previousScreen.textContent = `${previousValue} ${operator.toLowerCase()}`;
      currentScreen.textContent = currentValue;
    } else {
      previousScreen.textContent = `${previousValue} ${operator}`;
      currentScreen.textContent = currentValue; 
    }
    
  }));

  clear.addEventListener("click", function(){
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

  equals.addEventListener("click", function(){
    if(currentValue != '' && previousValue != '') {
      calculate();
      previousScreen.textContent = '';
      currentScreen.textContent = previousValue;
    }    
  });
});

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

function calculate() {
  previousValue = Number(previousValue);
  console.log(previousValue);
  currentValue = Number(currentValue);
  console.log(currentValue);

  if(operator === '+') {
    previousValue += currentValue;
  } else if(operator === '-'){
    previousValue -= currentValue;
  } else if(operator === 'X'){
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = toFixedIfNeeded(previousValue, 3).toString();
  currentValue = toFixedIfNeeded(previousValue, 3).toString();
}

function toFixedIfNeeded(value, dp) {
  return +parseFloat(value).toFixed(dp);
}