function getOperator() {
    let sign = '';

    do {
        sign = prompt('Enter the operator');
    } while (isOperatorValid(sign));

    return sign;
}

function isOperatorValid(sign) {
    return (
        (sign !== '+') &&
        (sign !== '-') &&
        (sign !== '*') &&
        (sign !== '/')
    );
}

function getNumberOperands(lowerLimit, upperLimit) {
    let count = '';

    do {
        count = prompt(`Enter number of operands (more ${lowerLimit} and less ${upperLimit})`);
    } while (isNumberValid(count, lowerLimit, upperLimit));

    return Number(count);
}

function isNumberValid(num, lowerLimit, upperLimit) {
    return (
        !((num > lowerLimit) && (num < upperLimit)) ||
        isNaN(num)
    );
}

function getOperand(numberIter) {
    let operand = '';

    do {
        operand = prompt(`Enter the operand ${numberIter + 1}`);
    } while (isOperandValid(operand));

    return Number(operand);
}

function isOperandValid(num) {
    return (!num || (num === '') || (num < 0) || isNaN(num));
}

function sum(result, term) {
    return (result += term);
}

function subtraction(result, term) {
    return (result -= term);
}

function multiplication(result, term) {
    return (result *= term);
}

function division(result, term) {
    return (result /= term).toFixed(3);
}

function calculate(sign, result, term) {
    switch (sign) {
        case '+':
            return sum(result, term);
        case '-':
            return subtraction(result, term);
        case '*':
            return multiplication(result, term);
        case '/':
            return division(result, term);
    }
}

function getResultOperation(sign, numberIter) {
    let resultOperation = 0;
    let expression = '';

    for (let i = 0; i < numberIter; i++) {
        let operand = getOperand(i);

        if (i === 0) {
            resultOperation = operand;
            expression = operand;
            continue;
        }
        resultOperation = calculate(sign, resultOperation, operand);
        expression += ` ${sign} ${operand}`;
    }

    return (`${expression} = ${resultOperation}`);
}

const operator = getOperator();
const numberOperands = getNumberOperands(1, 6);
const resultOperation = getResultOperation(operator, numberOperands);


alert(resultOperation);