function calculate () {
    const num1 = +document.querySelector(".calc-input1").value;
    const num2 = +document.querySelector(".calc-input2").value;
    const op = document.querySelector(".op-select").value; 

    let result;

    if(op === "plus"){
        result = num1 + num2;
    } else if (op === "minus"){
        result = num1 - num2;
    } else if (op === "multiply"){
        result = num1 * num2;
    } else if (op === "divide") {
        result = num1 / num2;
    } else{
        console.error("Wrong op!");
        alert("Wrong operation is selected");
    }

    document.querySelector(".calc-result").value = result;

}

document.querySelector(".calk-calculate").addEventListener("click", function(){
    calculate();
});

document.querySelector(".op-select").addEventListener("click", function(){
    calculate();
});

document.querySelector(".calc-input1").addEventListener("click", function(){
    calculate();
});

document.querySelector(".calc-input2").addEventListener("click", function(){
    calculate();
});



    