document.querySelector('.clc-clc') .addEventListener ('click', function () {
	const n1 = 1*document.querySelector('[name="aygend"]' ).value;
	const n2 = 1*document.querySelector('[name="addend"]' ).value;
	const sum = n1+n2;
	document.querySelector('.clc-res').value = sum;
});