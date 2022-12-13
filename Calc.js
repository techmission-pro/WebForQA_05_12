function calculet() {
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const operation = document.querySelector('[name="operation"]').value;
	
	let result;
	
	if (operation === '1') {
		result = num1 + num2;
	} else if (operation === '2') {
		result = num1 - num2;
	} else if (operation === '3') {
		result = num1 / num2;
	}  else if (operation === '4') {
		result = num1 * num2;
	}
		
	
	document.querySelector('.calc-result').value = result;
}

document.querySelector('.calc-calculate').addEventListener('click', function() {
	calculet();
});

document.querySelector('[name="operation"]').addEventListener('change', function() {
	calculet();
});

document.querySelector('[name="num1"]').addEventListener('input', function() {
	calculet();
});


document.querySelector('[name="num2"]').addEventListener('input', function() {
	calculet();
});
