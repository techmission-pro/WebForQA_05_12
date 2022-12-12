console.log('loaded');
function cal() {
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
}

document.querySelector('.calc').addEventListener('click', cal);
document.querySelector('.oper').addEventListener('change', cal);
document.querySelector('[name="num1"]').addEventListener('change', cal);
document.querySelector('[name="num2"]').addEventListener('change', cal);

