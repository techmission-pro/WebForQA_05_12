 console.log ('calculator loaded');
 function calculate () 
{
    const num1 = +document.querySelector('[name = "num1"]').value;
    const num2 = +document.querySelector('[name = "num2"]').value;
    const option = document.querySelector('[name="operation"]').value

    let result;
    if (option === 'plus') {
        result =num1 + num2;
    } else if (option === 'minus') {
        result =num1 - num2;
    }else if (option === 'multiply') {
        result =num1 * num2;
    }else if (option === 'divide') {
    result =num1 / num2;
    } else {
        console.error('Wrong operation!');
        alart ('Wrong operation is selected');
    }



    
    document.querySelector ('.calculator-result').value = result;

}
document.querySelector ('.calculator-calculate').addEventListener('click', function() {
    calculate ();
});
document.querySelector ('[name="operation"]').addEventListener('change', function() {
    calculate ();
});
document.querySelector('[name="num1"]').addEventListener('input', function() {
    calculate ();
})
document.querySelector('[name="num2"]').addEventListener('input', function() {
        calculate ();
});
  
