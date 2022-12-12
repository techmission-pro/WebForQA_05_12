console.log('loaded');
document.querySelector('.calc').addEventListener('click', function() {
	const sum1=+document.querySelector('input[name="num1"]').value;
	const sum2=+document.querySelector('input[name="num2"]').value;
	const op=document.querySelector('.oper').value;
	console.log(sum1, sum2, op);
	let res;
	if (op == 'plus') {
	res=sum1+sum2;
    } else	if (op == 'minus') {
		res=sum1-sum2;
	} else	if (op == 'mult') {
		res=sum1*sum2;
	} else	 {
		res=sum1/sum2;
	}
	document.querySelector('.calc-result').innerText=res;
});
