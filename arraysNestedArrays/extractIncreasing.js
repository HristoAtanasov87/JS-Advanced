function solve(input) {
    let result = input.reduce(check, []);

    function check(result, c) {
        if (c >= result[result.length - 1] || result.length === 0) {
            result.push(c);
        }
        return result;
    }

    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));