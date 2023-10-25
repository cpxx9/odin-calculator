//math functions
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
        return add(first, last);
    } else if(operator === 'subtract') {
        return subtract(first, last);
    } else if(operator === 'multiply') {
        return multiply(first, last);
    } else if(operator === 'divide') {
        return divide(first, last);
    } else {
        return 0;
    }
}

//Button click events
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
document.getElementById("plus").onclick = function() {
    
};
document.getElementById("subtract").onclick = function() {
    
};
document.getElementById("multiply").onclick = function() {
    
};
document.getElementById("divide").onclick = function() {
    
};
document.getElementById("equals").onclick = function() {
    
};
document.getElementById("clear").onclick = function() {
    displayArr = [];
    displayValue = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    document.getElementById("display").innerHTML = displayValue;
};

//normal functions
function updateDisplay(int) {
    displayArr.push(int);
    if (displayArr[0] == 0 && displayArr.length != 1) {
        displayArr.shift();
    } 
    displayValue = displayArr.join('');
       
    document.getElementById("display").innerHTML = displayValue;
}

//variable declarations
let firstNumber;
let secondNumber;
let operator;
let displayArr = [];
let displayValue;


