function solve(input) {
    let number = 1;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            result.push(number);
        } else if (input[i] == 'remove') {
            result.pop();
        }
        number++;
    }

    if (result.length != 0) {
        return result.join('\n');
    } else {
        return 'Empty';
    }
}

console.log(solve(['add', 'add', 'remove', 'add', 'add']));