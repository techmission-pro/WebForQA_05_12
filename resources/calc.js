function calculate() { 
    const num1 = +document.querySelector('[name = num1]').value;
    const num2 = +document.querySelector('[name = num2]').value;
    const operation = document.querySelector('[name=operation]').value;
    let result;
    
    if (operation === 'plus') {
        result = num1 + num2;
    } else if (operation === 'minus') {
       result = num1 - num2; 
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if  (operation === 'divide') {
        result = num1 / num2;
    } else {
    console.error('ERROR!');
    alert('Wrong operation is selected!')
    }
    
    
    document.querySelector('.calc-result').value = result;
    }
document.querySelector('.calc-button').addEventListener('click',function() {
    calculate();
});

document.querySelector('[name=operation]').addEventListener('change',function() {
    calculate();
}) 

document.querySelector('[name=num1]').addEventListener('input',function() {
    calculate();
}) 

document.querySelector('[name=num2]').addEventListener('input',function() {
    calculate();
}) 