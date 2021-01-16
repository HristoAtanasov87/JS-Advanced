function solve(input) {
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < input.length; i++) {
        firstSum += input[i][i];
        secondSum += input[i][input.length - i - 1];
    }

    console.log(firstSum, secondSum);
}

solve(
    [[20, 40],
    [10, 60]]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);