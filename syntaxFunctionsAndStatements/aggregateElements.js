function solve(input) {
    let resultOne = sum(input);
    let resultTwo = sumInverse(input);
    let resultThree = concatenate(input);

    function sum(array) {
        let totalSum = 0;
        for (let i of array) {
            totalSum += i;
        }
        return totalSum;
    }

    function sumInverse(array) {
        let totalSum = 0;
        for (let i of array) {
            totalSum += 1 / i;
        }
        return totalSum;
    }

    function concatenate(array) {
        let concatenated = "";
        for (let i of array) {
            i = i.toString();
            concatenated += i;
        }
        return concatenated;
    }


    console.log(resultOne);
    console.log(resultTwo);
    console.log(resultThree);
}

solve([1, 2, 3]);