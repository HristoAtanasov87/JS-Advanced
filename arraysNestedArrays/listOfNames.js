function solve(input) {
    let result = input
        .sort((a, b) => a.localeCompare(b))
        .map((el, index) => {
            return `${index + 1}.${el}`;
        })
    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));