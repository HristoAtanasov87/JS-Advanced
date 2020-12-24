function solve(numOne, numTwo) {
    let divider = numOne;
    let divisible = numTwo;

    if (numOne > numTwo) {
        divider = numTwo;
        divisible = numOne;
    }

    let greatest = 0;
    if (divisible % divider == 0) {
        greatest = divider;
    } else {
        for (let i = divider; i > 0; i--) {
            if (divisible % i == 0 && divider % i == 0) {
                greatest = i;
                break;
            }
        }
    }

    console.log(greatest);

}

solve(44, 22)