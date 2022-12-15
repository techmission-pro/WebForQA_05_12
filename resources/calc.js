function calculate() {
	const num1 = +document.querySelector('[name = "num1"]').value;
	const num2 = +document.querySelector('[name = "num2"]').value;
	if (!num1 || !num2) {
		return;
	}
	const op = document.querySelector('[name = "op"]').value;
	let result;
	switch (op) {
		case "plus":
			result = num1 + num2;
			break;
		case "minus":
			result = num1 - num2;
			break;
		case "multiply":
			result = num1 * num2;
			break;
		case "divide":
			result = num1 / num2;
			break;
	}

	document.querySelector('.calc-result').value = result;
}
document.querySelector('.calc-button').addEventListener('click', function () {
	calculate();
})

document.querySelector('[name = "op"]').addEventListener('change', function () {
	calculate();
})

document.querySelector('[name = "num1"]').addEventListener('input', function () {
	calculate();
})

document.querySelector('[name = "num2"]').addEventListener('input', function () {
	calculate();
})