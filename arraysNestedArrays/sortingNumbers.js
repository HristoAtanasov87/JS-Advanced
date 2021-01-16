function solve(input) {
    let result = [];
    input.sort((a, b) => a - b);
    while (input.length) {

        let first = input.shift();
        result.push(first);

        if (input.length > 0) {
            let last = input.pop();
            result.push(last);
        }

    }


    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));