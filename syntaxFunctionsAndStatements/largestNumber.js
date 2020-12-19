function solve(numOne, numTwo, numThree) {
    let min = Number.MIN_SAFE_INTEGER;

    if (numOne > min) {
        min = numOne;
    }

    if (numTwo > min) {
        min = numTwo;
    }

    if (numThree > min) {
        min = numThree;
    }

    console.log(`The largest number is ${min}.`);
}

solve(1, -2, 3)