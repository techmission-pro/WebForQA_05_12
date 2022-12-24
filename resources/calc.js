document.querySelector('.calc-calculate').addEventListener('click', function (){
const num1 = +document.querySelector('[name="num1"]').value;
const num2 = +document.querySelector('[name="num2"]').value;

const option = document.querySelector('[name="option"]').value;

let result;

if (option === 'plus') {
	result = num1 + num2;
} else if (option === 'minus') {
	result = num1 - num2;
} else if (option === 'multiply') {
	result = num1 * num2;
} else if (option === 'divid') {
	result = num1 / num2;
} else {
	colsole.error('Wrong op!');
	alert('Wrong operation is selected');
}

document.querySelector('.calc-result').value = result;

});