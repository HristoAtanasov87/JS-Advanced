function calc() {
    const numOne = document.getElementById('num1'); // reference
    const numTwo = document.getElementById('num2'); // reference
    const sum = document.getElementById('sum'); //reference

    sumValue = Number(numOne.value) + Number(numTwo.value);
    sum.value = sumValue;
}
