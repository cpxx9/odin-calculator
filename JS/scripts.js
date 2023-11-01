//MATH FUNCTIONS
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(first, last, operator) {
    if(operator === 'add') {
        return add(parseInt(first), parseInt(last));
    } else if(operator === 'subtract') {
        return subtract(parseInt(first), parseInt(last));
    } else if(operator === 'multiply') {
        return multiply(parseInt(first), parseInt(last));
    } else if(operator === 'divide') {
        return divide(parseInt(first), parseInt(last));
    } else {
        return 0;
    }
}

//NORMAL FUNCTIONS
function updateDisplay(int) {
    displayArr.push(int);
    if (displayArr[0] == 0 && displayArr.length != 1) {
        displayArr.shift();
    } 
    displayValue = displayArr.join('');
       
    document.getElementById("display").innerHTML = displayValue;
}
function toFixedIfNeeded(value, dp) {
    return +parseFloat(value).toFixed(dp);
}
function operatorClick(string) {
    if(operator != undefined){
        secondNumber = displayValue;
        total = operate(firstNumber, secondNumber, operator);
        firstNumber = total;
        document.getElementById("display").innerHTML = toFixedIfNeeded(total, 2);
    } else {
        firstNumber = displayValue;
    }    
    operator = string;
    displayArr = [];
    displayValue = 0;
}

//BUTTON CLICK EVENTS
document.getElementById("0").onclick = function() {
    updateDisplay(0);    
};
document.getElementById("1").onclick = function() {
    updateDisplay(1);    
};
document.getElementById("2").onclick = function() {
    updateDisplay(2);    
};
document.getElementById("3").onclick = function() {
    updateDisplay(3);    
};
document.getElementById("4").onclick = function() {
    updateDisplay(4);    
};
document.getElementById("5").onclick = function() {
    updateDisplay(5);    
};
document.getElementById("6").onclick = function() {
    updateDisplay(6);    
};
document.getElementById("7").onclick = function() {
    updateDisplay(7);    
};
document.getElementById("8").onclick = function() {
    updateDisplay(8);    
};
document.getElementById("9").onclick = function() {
    updateDisplay(9);    
};
document.getElementById("add").onclick = function() {
    operatorClick("add");
};
document.getElementById("subtract").onclick = function() {
    operatorClick("subtract");
};
document.getElementById("multiply").onclick = function() {
    operatorClick("multiply");
};
document.getElementById("divide").onclick = function() {
    operatorClick("divide");
};
document.getElementById("equals").onclick = function() {
    secondNumber = displayValue;
    total = operate(firstNumber, secondNumber, operator);
    document.getElementById("display").innerHTML = toFixedIfNeeded(total, 2);
    displayArr = [];
    firstNumber = displayValue;
};
document.getElementById("clear").onclick = function() {
    displayArr = [];
    displayValue = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    document.getElementById("display").innerHTML = displayValue;
};

document.getElementById("backspace").onclick = function() {
    displayArr.pop();
    console.log(displayArr);
    displayValue = displayArr.join('');
    document.getElementById("display").innerHTML = displayValue;
};

//VARIABLE DECLARATIONS
let firstNumber;
let secondNumber;
let operator;
let total;
let displayArr = [];
let displayValue;