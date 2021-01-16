function solve(input) {
    let foundPairs = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {

            if (input[i][j] === input[i][j + 1]) {
                foundPairs++;
            }
        }
    }

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length; j++) {

            if (input[i][j] === input[i + 1][j]) {
                foundPairs++;
            }
        }
    }
    console.log(foundPairs);
}



solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']])