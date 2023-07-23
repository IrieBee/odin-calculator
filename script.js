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

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const ac = document.querySelector('#ac');
const del = document.querySelector('#del');
const percent = document.querySelector('#percent');
const plus = document.querySelector('#plus');
const grow = document.querySelector('#grow');
const split = document.querySelector('#split');
const dash = document.querySelector('#dash');
const dot = document.querySelector('#dot');
const big = document.querySelector('#big');
const numbers = document.querySelector('#numbers');

// Display numbers on screen when clicked
one.addEventListener('click', () => {
    numbers.textContent = '1';
});
two.addEventListener('click', () => {
    numbers.textContent = '2';
});
three.addEventListener('click', () => {
    numbers.textContent = '3';
});
four.addEventListener('click', () => {
    numbers.textContent = '4';
});
five.addEventListener('click', () => {
    numbers.textContent = '5';
});
six.addEventListener('click', () => {
    numbers.textContent = '6';
});
seven.addEventListener('click', () => {
    numbers.textContent = '7';
});
eight.addEventListener('click', () => {
    numbers.textContent = '8';
});
nine.addEventListener('click', () => {
    numbers.textContent = '9';
});
zero.addEventListener('click', () => {
    numbers.textContent = '0';
});
