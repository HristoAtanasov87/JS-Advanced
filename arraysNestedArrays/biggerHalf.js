function solve(input) {
    let result = input
        .sort((a, b) => (a - b))
        .slice(Math.floor(input.length / 2));

    return result
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));