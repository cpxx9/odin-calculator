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
<<<<<<< HEAD
        return add(parseInt(first), parseInt(last));
    } else if(operator === 'subtract') {
        return subtract(parseInt(first), parseInt(last));
    } else if(operator === 'multiply') {
        return multiply(parseInt(first), parseInt(last));
    } else if(operator === 'divide') {
        return divide(parseInt(first), parseInt(last));
=======
        return add(parseFloat(first), parseFloat(last));
    } else if(operator === 'subtract') {
        return subtract(parseFloat(first), parseFloat(last));
    } else if(operator === 'multiply') {
        return multiply(parseFloat(first), parseFloat(last));
    } else if(operator === 'divide') {
        return divide(parseFloat(first), parseFloat(last));
>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
    } else {
        return 0;
    }
}

<<<<<<< HEAD
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
=======
//KEYBOARD SUPPORT
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if(evt.keyCode == "96") {
        updateDisplay(0);
    } else if(evt.keyCode == "97") {
        updateDisplay(1);
    } else if(evt.keyCode == "98") {
        updateDisplay(2);
    } else if(evt.keyCode == "99") {
        updateDisplay(3);
    } else if(evt.keyCode == "100") {
        updateDisplay(4);
    } else if(evt.keyCode == "101") {
        updateDisplay(5);
    } else if(evt.keyCode == "102") {
        updateDisplay(6);
    } else if(evt.keyCode == "103") {
        updateDisplay(7);
    } else if(evt.keyCode == "104") {
        updateDisplay(8);
    } else if(evt.keyCode == "105") {
        updateDisplay(9);
    } else if(evt.keyCode == "110") {
        if (!displayArr.includes('.')) {
            updateDisplay('.');
        } 
    } else if(evt.keyCode == "107") {
        operatorClick("add");
    } else if(evt.keyCode == "109") {
        operatorClick("subtract");
    } else if(evt.keyCode == "106") {
        operatorClick("multiply");
    } else if(evt.keyCode == "111") {
        operatorClick("divide");
    } else if(evt.keyCode == "48") {
        updateDisplay(0);
    } else if(evt.keyCode == "49") {
        updateDisplay(1);
    } else if(evt.keyCode == "50") {
        updateDisplay(2);
    } else if(evt.keyCode == "51") {
        updateDisplay(3);
    } else if(evt.keyCode == "52") {
        updateDisplay(4);
    } else if(evt.keyCode == "53") {
        updateDisplay(5);
    } else if(evt.keyCode == "54") {
        updateDisplay(6);
    } else if(evt.keyCode == "55") {
        updateDisplay(7);
    } else if(evt.keyCode == "56") {
        updateDisplay(8);
    } else if(evt.keyCode == "57") {
        updateDisplay(9);
    } else if(evt.keyCode == "190") {
        if (!displayArr.includes('.')) {
            updateDisplay('.');
        } 
    } else if(evt.keyCode == "187") {
        operatorClick("add");
    } else if(evt.keyCode == "189") {
        operatorClick("subtract");
    } else if(evt.keyCode == "191") {
        operatorClick("divide");
    } else if(evt.keyCode == "27") {
        displayArr = [];
        displayValue = 0;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        document.getElementById("display").innerHTML = displayValue;
    } else if(evt.keyCode == "8") {
        displayArr.pop();
        displayValue = displayArr.join('');
        document.getElementById("display").innerHTML = displayValue;
    } else if(evt.keyCode == "13") {
        secondNumber = displayValue;
        total = operate(firstNumber, secondNumber, operator);
        document.getElementById("display").innerHTML = toFixedIfNeeded(total, 2);
    }
>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
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
<<<<<<< HEAD
=======
document.getElementById("decimal").onclick = function() {
    if (!displayArr.includes('.')) {
        updateDisplay('.');
    }    
};
>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
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
<<<<<<< HEAD
=======

>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
document.getElementById("equals").onclick = function() {
    secondNumber = displayValue;
    total = operate(firstNumber, secondNumber, operator);
    document.getElementById("display").innerHTML = toFixedIfNeeded(total, 2);
<<<<<<< HEAD
    displayArr = [];
    firstNumber = displayValue;
=======
>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
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
<<<<<<< HEAD
    console.log(displayArr);
=======
>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
    displayValue = displayArr.join('');
    document.getElementById("display").innerHTML = displayValue;
};

<<<<<<< HEAD
=======
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

>>>>>>> 390156315c9e7a511b87a758f7bd6b12e3bd99da
//VARIABLE DECLARATIONS
let firstNumber;
let secondNumber;
let operator;
let total;
let displayArr = [];
let displayValue;