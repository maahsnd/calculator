let numSelectionStr = '';
let operatorSelectionStr = '';
let firstNum = '';
let secondNum = '';

function add(addend,addend1) {
    return (display(addend, 'plus', addend1, addend + addend1));
}

function subtract(minuend, subtrahend) {
    return (display(minuend, 'minus', subtrahend, minuend - subtrahend));
}

function multiply(multipicand, multiplier) {
    return (display(multipicand, 'times', multiplier, multipicand * multiplier));
}

function divide(dividend, divisor) {
    return( display(dividend, 'divided by', divisor, dividend / divisor));
}

function operate(operator, operand, operand1) {
    console.log(operator, operand, operand1);
    if (operator === 'Add') {
        return add(operand, operand1);
    }

    else if (operator === 'Subtract') {
        return subtract(operand, operand1);
    }

    else if (operator === 'Multiply') {
        return multiply(operand, operand1);
    }

    else {
        return divide(operand, operand1);
    }
}

function display(operand, operator, operand1, displayValue) {
    console.log(operand, operator, operand1, displayValue);
    const display = document.querySelector('.numericalDisplay');
    display.innerHTML = `${operand} ${operator} ${operand1} equals ${displayValue}`;
    console.log('first val:', firstNum, operatorSelectionStr,
 'second val: ', secondNum);
}

function makeNumberButtonListeners() {
    const numButtons = document.querySelectorAll('.number');
    numButtons.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            numSelectionStr += e.target.innerHTML;
        });
    });
    }

function makeOperatorButtonListeners() {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            operatorSelectionStr += e.target.innerHTML;
            getFirstNum();
        });
    });
}

function getFirstNum() {
    firstNum = numSelectionStr;
    numSelectionStr = '';
}

function makeEqualsButtonListener() {
    const equalsButton = document.querySelector('.equals');
    equalsButton.addEventListener('click', (e) => {
        getSecondNum();
    });
}


function getSecondNum() {
    console.log(81);
    secondNum = numSelectionStr;
    numSelectionStr = '';
    console.log(firstNum, secondNum);
    return operate(operatorSelectionStr, parseInt(firstNum), parseInt(secondNum));
}

function callListenerFuncs() {
    makeNumberButtonListeners();
    makeOperatorButtonListeners();
    makeEqualsButtonListener();
};

callListenerFuncs();
