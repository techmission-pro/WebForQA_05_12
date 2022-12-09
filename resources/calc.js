console.log('Calc loaded');

document.querySelector('.calc-calculate').addEventListener('click',function()
    { const number1 = +document.querySelector('[name="number1"]').value;
const number2 = +document.querySelector('[name="number2"]').value;

// + befor.  number1 and number2 converts a string to a number

const sum = number1 + number2;
document.querySelector('.calc-result').value=sum;
    } )