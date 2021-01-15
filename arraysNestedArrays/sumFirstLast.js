function solve(input) {
    input = input.map(Number);
    let first = input.shift();
    let last = input.pop();

    return first + last;
}

console.log(solve(['20', '30', '40']));