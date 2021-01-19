function solve(text) {
    let pattern = /[A-Za-z\d]+/g;
    let toPrint = [];

    let result = text.match(pattern);
    for (let el of result) {
        toPrint.push(el.toUpperCase());
    }

    return toPrint.join(', ')
}

console.log(solve('Hi, how are you?'));