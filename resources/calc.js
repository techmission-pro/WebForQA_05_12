console.log('Calc loaded');

function calculate()
    { const number1 = +document.querySelector('[name="number1"]').value;
      const number2 = +document.querySelector('[name="number2"]').value;
	  const op = document.querySelector('[name="operation"]').value;

	// + converts a string to a number

	let result;
	if (op==='plus') { result = number1 + number2; }
	  else 
		if (op==='minus') { result = number1 - number2; }
	      else 
			if (op==='multiply') { result = number1 * number2; }
		       else 
				 if (op==='devide') { result = number1 / number2; }
				  else {
					  console.error('Wrong operation');
					  alert('Wrong operation is selected');
				  }
		  
	document.querySelector('.calc-result').value=result;
    } 

document.querySelector('.calc-calculate').addEventListener('click', function() 	{	calculate(); } )

document.querySelector('[name="operation"]').addEventListener('change',function() 	{	calculate(); } 	)
