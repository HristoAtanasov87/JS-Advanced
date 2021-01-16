function solve(input) {
    let result = [];

    for (let i = 1; i < input.length; i += 2) {
        result.push(input[i]);
    }

    return result.map(el => el * 2).reverse();
}

console.log(solve([10, 15, 20, 25]));