function solve(input) {
    let result = {};

    for (let i of input) {
        let [product, price] = i.split(' : ');
        price = Number(price);

        let letter = product[0];

        if (!result.hasOwnProperty(letter)) {
            result[letter] = [];
        }

        result[letter].push({ product, price });

        result[letter].sort((a, b) => (a.product).localeCompare(b.product));
    }

    let toSort = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    let toPrint = [];
    for (let el of toSort) {
        let second = el[1].map(x => `  ${x.product}: ${x.price}`).join('\n');
        let string = `${el[0]}\n${second}`;
        toPrint.push(string);
    }
    return toPrint.join('\n');
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));