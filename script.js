function add(addend,addend1) {
    return (addend + addend1);
}

function subtract(minuend, subtrahend) {
    return (minuend - subtrahend);
}

function multiply(multipicand, multiplier) {
    return (multipicand * multiplier);
}

function divide(dividend, divisor) {
    return( dividend / divisor);
}

function operate(operator, operand, operand1) {
    if (operator === add) {
        return add(operand, operand1);
    }

    else if (operator === subtract) {
        return subtract(operand, operand1);
    }

    else if (operator === multiply) {
        return multiply(operand, operand1);
    }

    else {
        return divide(operand, operand1);
    }
}

function display(operator, operand, operand1) {
    let displayValue = operate(operator, operand, operand1);
    return displayValue;
}