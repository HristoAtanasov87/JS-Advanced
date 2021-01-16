function solve(input, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let last = input.pop();
        input.unshift(last);
    }

    return input.join(' ');
}

console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));