function solve(input) {
    let inputString = input.toString();
    let count = 0;
    let first = inputString[0];
    let countIfFalse = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (first === inputString[i]) {
            count += Number(first);
        }
        countIfFalse += Number(inputString[i]);
    }

    if (count / inputString.length === Number(first)) {
        console.log(true);
        console.log(count);
    } else {
        console.log(false);
        console.log(countIfFalse);
    }

}

solve(1234);