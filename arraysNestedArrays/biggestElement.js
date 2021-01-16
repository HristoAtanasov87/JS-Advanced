function solve(input) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i of input) {
        for (let j of i) {
            if (j > max) {
                max = j;
            }
        }
    }

    return max;
}



console.log(solve(
    [[20, 50, 10],
    [8, 33, 145]]
));