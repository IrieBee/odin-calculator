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

// const ac = document.querySelector('#ac');
// const del = document.querySelector('#del');
// const percent = document.querySelector('#percent');
const plus = document.querySelector('#plus');
// const grow = document.querySelector('#grow');
// const split = document.querySelector('#split');
// const dash = document.querySelector('#dash');
// const dot = document.querySelector('#dot');
// const big = document.querySelector('#big');
const numbers = document.querySelector('#numbers');

// Display numbers on screen when clicked
function convert() { 
    document.querySelectorAll('.num').forEach(function(button) {
        button.onclick = function()  {
            numbers.textContent += button.dataset.number;
        }
    })
    return Number(numbers.textContent);
}

if (plus.onclick !== true) {
    convert();
}
else numOne = convert();
console.log(numOne);
