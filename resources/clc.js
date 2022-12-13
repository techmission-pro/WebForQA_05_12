document.querySelector('.clc-clc') .addEventListener ('click', function () {
	const n1 = 1*document.querySelector('[name="aygend"]' ).value;
	const n2 = 1*document.querySelector('[name="addend"]' ).value;
	const opr = document.querySelector('[name="opr"]' ).value;
	let res;

	if (opr=== 'plus') {res = n1+n2}
	else if (opr=== 'minus') {res = n1-n2}
	else if (opr=== 'multiply') {res = n1*n2}
	else if (opr=== 'divide') {res = n1/n2}
		else {console.error ('😳Wrong operation!');
			          alert ('😳Wrong operation!');
			 }

	document.querySelector('.clc-res').value = res;
});