console.log('loaded');
document.querySelector('.calc').addEventListener('click', function() {
	const sum1=+document.querySelector('input[name="num1"]').value;
	const sum2=+document.querySelector('input[name="num2"]').value;
	const sum3=sum1+sum2;
	console.log(sum1, sum2, sum3);
	document.querySelector('.calc-result').innerText=sum3;
});
