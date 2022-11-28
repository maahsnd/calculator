const inputArray = [];
let num1 = '';
let num2 = '';
let operator = '';
let result;

function handler(){
    let operationOngoing = true;
    while (operationOngoing){

        //collect 1st num
        inputArray.forEach(e => 
            if (!isNaN(e)){
                num1 += e;
                inputArray.splice(e, 1);}
            else {
                break;
            })
           
        //collect 1st operator
        operator += inputArray[0];

        //collect 2nd num
        inputArray.forEach(e =>
            if(!isNaN(e)){
                num2 += e;
                inputArray.splice(e, 1);}
            else {
                break;
            })

        //check 2nd operator. if equals, set to false
        if (inputArray[0] === '=') {
            operationOngoing = false;
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
    console.log(operator, operand, operand1);
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
    const buttons = document.querySelectorAll('.number, .operator, .equals');
    buttons.addEventListener('click', (e) => {
        inputArray.push(e.target.innerHTML);
    });
}

makeButtonListeners();
handler();