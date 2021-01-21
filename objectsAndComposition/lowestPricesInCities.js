function solve(input) {
    let result = {};

    for (let el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = {
                'price': price,
                'town': town
            }
        }

        if (result[product].price > price) {
            result[product].price = price;
            result[product].town = town;
        }
    }

    let toPrint = [];

    for (obj in result) {
        toPrint.push(`${obj} -> ${result[obj].price} (${result[obj].town})`);
    }

    return toPrint.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));