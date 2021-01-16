function solve(input, step) {
    let result = input.filter((el, i) => {
        if (i % step === 0) {
            return true;
        }
    })

    /*
    function check(el, i) {
        i % step ===0
    }

    result = input.filter(check);
    return result
    */

    return result;
}


console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
))

console.log(solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6
))