const inputArray = [];
let num1 = '';
let num2 = '';
let operator = '';
let result;

function handler(){
    let operationOngoing = true;
    while (operationOngoing){
        //collect 1st num
        for (let i = 0; i < inputArray.length; i++) {
            //not catching operators
            console.log(Number.isInteger(parseInt(inputArray[0])));
            if (!Number.isInteger(parseInt(inputArray[0]))){
                break;
            }
            else {
                num1 += inputArray[0];
                inputArray.splice(0, 1);
            }};
        console.log(inputArray, num1, num2, operator);
        //collect 1st operator and remove from array
        operator += inputArray[0];
        inputArray.splice(0,1)

        //collect 2nd num
        for (let j = 0; j < inputArray.length; j++) {
            if (!Number.isInteger(parseInt(inputArray[0]))){
                break;
            }
            else {
                num2 += inputArray[0];
                inputArray.splice(0, 1);
            }};

        //check 2nd operator. if equals, set to false
        if (inputArray[0] === 'Equals') {
            operationOngoing = false;
            inputArray.splice(0, 1);
            //return result of (1st num, 1st operator, 2nd num)  
            result = operate(operator, parseInt(num1), parseInt(num2));
            return display(result);
        }

        //pass calculated value back as 1st num
        else {
            inputArray.unshift(
                operate(operator, parseInt(num1), parseInt(num2)));
            //reset 
            num1 = num2 = operator = '';
        }
    }
}

function display(result) {
    const answerDisplay = document.querySelector('.numericalDisplay');
    answerDisplay.innerHTML = `${result}`;
}

//operator-specific functions
function add(addend,addend1) {
    return (addend + addend1);}

function subtract(minuend, subtrahend) {
    return (minuend - subtrahend);}

function multiply(multipicand, multiplier) {
    return (multipicand * multiplier);}

function divide(dividend, divisor) {
    return( dividend / divisor);}

//coordinate operator-specific functions
function operate(operator, operand, operand1) {
    if (operator === 'Add') {
        return add(operand, operand1);}

    else if (operator === 'Subtract') {
        return subtract(operand, operand1);}

    else if (operator === 'Multiply') {
        return multiply(operand, operand1);}

    else {
        return divide(operand, operand1);}
}

//add all button clicks (except clear) to inputArray
function makeButtonListeners(){
    const buttons = document.querySelectorAll('.number, .operator');
    const equalsBtn = document.querySelector('.equals');
    const clearBtn = document.querySelector('.clear');
    buttons.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            inputArray.push(e.target.innerHTML);
        });
    });  
    equalsBtn.addEventListener( 'click', (e) => {
        inputArray.push(e.target.innerHTML);
        handler();
    });
    clearBtn.addEventListener( 'click', () => {
        num1 = num2 = operator = result = '';
        display(result);
});
}

makeButtonListeners();