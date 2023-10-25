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
        displayArr.push(0);
        if (displayArr[0] == 0 && displayArr.length != 1) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("1").onclick = function() {
        displayArr.push(1);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("2").onclick = function() {
        displayArr.push(2);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("3").onclick = function() {
        displayArr.push(3);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("4").onclick = function() {
        displayArr.push(4);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("5").onclick = function() {
        displayArr.push(5);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("6").onclick = function() {
        displayArr.push(6);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("7").onclick = function() {
        displayArr.push(7);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("8").onclick = function() {
        displayArr.push(8);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
    };
    document.getElementById("9").onclick = function() {
        displayArr.push(9);
        if (displayArr[0] == 0) {
            displayArr.shift();
            displayValue = displayArr.join('');
        } else {
            displayValue = displayArr.join('');
        }    
        document.getElementById("display").innerHTML = displayValue;
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
        document.getElementById("display").innerHTML = displayValue;
    };
let firstNumber;
let secondNumber;
let operator;
let displayArr = [];
let displayValue;


