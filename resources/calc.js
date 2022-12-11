console.log('Calc loaded');

function calculate()
    { const num1=document.querySelector('[name="number1"]').value;
	  const num2=document.querySelector('[name="number2"]').value;
	  let number1, number2;
	  if (num1 !=="") number1 = +num1; else number1 = "";
      if (num2 !=="") number2 = +num2; else number2 = "";
	  const op = document.querySelector('[name="operation"]').value;

	// + converts a string to a number

	let result;
	if (number1 !=="" && number2 !=="") 
	 if (op==='plus')   { result = number1 + number2; }
	  else 
		if (op==='minus') { result = number1 - number2; }
	      else 
			if (op==='multiply') { result = number1 * number2; }
		       else 
				if (op==='devide') 
				   if (number2 !==0) { result = number1 / number2; }
					 else {	result =""; console.error('Wrong operation');  alert('Division by 0 is impossible'); }
				else {
					   console.error('Wrong operation');
					  alert('Wrong operation is selected');
				  }
	else  result =""; 
	
	document.querySelector('.calc-result').value=result;
    } 

document.querySelector('.calc-calculate').addEventListener('click', function() 	{	calculate(); } )

document.querySelector('[name="operation"]').addEventListener('change',function() 	{	calculate(); } 	)

document.querySelector('[name="number1"]').addEventListener('input',function() 	{	calculate(); } 	)

document.querySelector('[name="number2"]').addEventListener('input',function() 	{	calculate(); } 	)
