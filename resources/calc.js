document.querySelector(".calk-calculate").addEventListener("click", function(){
    const num1 = +document.querySelector(".calc-input1").value;
    const num2 = +document.querySelector(".calc-input2").value;

    const sum = num1 + num2;

    document.querySelector(".calc-result").value = sum;
});