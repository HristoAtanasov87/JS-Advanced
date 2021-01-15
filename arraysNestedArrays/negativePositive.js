function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            let [toMove] = input.slice(i, i + 1);
            result.unshift(toMove);
        } else {
            let [toMove] = input.slice(i, i + 1);
            result.push(toMove);
        }
    }

    console.log(result.join('\n'));
}

solve([7, -2, 8, 9]);