function solve(input) {
    let sumRows = [];
    let sumColumns = [];

    for (let i = 0; i < input.length; i++) { // суми на редовете
        sumRows.push(input[i].reduce((acc, c) => acc + c, 0))
    }

    for (let i = 0; i < input.length; i++) { // суми на колоните
        let sum = 0;
        for (let j = 0; j < input.length; j++) {
            sum += input[j][i];
        }
        sumColumns.push(sum);
    }

    // function sum(acc, c) {
    //     return acc + c;
    // }

    let isMagic = true;
    for (let i = 0; i < sumRows.length; i++) {
        for (let j = 0; j < sumColumns.length; j++) {

            if (sumRows[i] != sumColumns[j]) {
                isMagic = false;
                break;
            }
        }
    }

    return isMagic;
}

console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]



));