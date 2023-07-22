const add = (x, y) => {
    return x + y;
};

const subtract = (x, y) => {
    return x - y;
};

const multiply = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    if (y !==  0) {
        return (x / y).toPrecision(3);
    }
    else return false;
};

function operate (x, y, sign) {
    if (sign === '+') {
        return add(x, y);
    }
    else if (sign === '-') {
        return subtract(x, y);
    }
    else if (sign === '*') {
        return multiply(x, y);
    }
    else if (sign === '/') {
        return divide(x, y);
    }
    else return false;
}

let numOne;
let numTwo;
let operator;

