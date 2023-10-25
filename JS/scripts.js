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
    } if(operator === 'subtract') {
        return subtract(first, last);
    }if(operator === 'multiply') {
        return multiply(first, last);
    } if(operator === 'divide') {
        return divide(first, last);
    } 
}

function calcDisplay {
    
}

let firstNumber;
let secondNumber;
let operator;
let displayValue;

