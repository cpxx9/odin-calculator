let operator = '';
let previousValue = '';
let currentValue = '';

window.addEventListener('keydown', handleKeyPress());

document.addEventListener("DOMContentLoaded", function() {
  let clear = document.querySelector("#clear");
  let equals = document.querySelector("#equals");
  let decimal = document.querySelector("#decimal");

  let numbers = document.querySelectorAll(".numbers");
  let operators = document.querySelectorAll(".operators")

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");
  let backspc = document.querySelector(".backspc");

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

  decimal.addEventListener("click", function() {
    addDecimal();
    currentScreen.textContent = currentValue;
  });

  backspc.addEventListener("click", function() {
    backspace();
    currentScreen.textContent = currentValue;
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
  currentValue = Number(currentValue);

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

function addDecimal() {
  if(!currentValue.includes(".")) {
    currentValue += '.';
  }
}

function backspace() {
  currentValue = currentValue.slice(0, -1);
}

function handleKeyPress (e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key.textContent);
    currentScreen.textContent = currentValue;
  }
  if (e.key === "Enter" || e.key === "=" && currentValue != "" && previousValue != "") {
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    handleOperator(e.target.textContent);      
    previousScreen.textContent = `${previousValue} ${operator}`;
    currentScreen.textContent = currentValue;     
  }
  if (e.key === "*" || e.key === "x" || e.key === "X") {
    handleOperator("X");
    previousScreen.textContent = `${previousValue} ${operator.toLowerCase()}`;
    currentScreen.textContent = currentValue;
  
  }

  if (e.key === ".") {
    addDecimal();
    currentScreen.textContent = currentValue;
  }

  if (e.key === "Escape") {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    backspace();
    currentScreen.textContent = currentValue;
  }
}