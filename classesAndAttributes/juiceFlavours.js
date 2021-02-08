function solve(input) {
    let juices = {};
    let bottles = {};

    for (let el of input) {
        let [juice, quantity] = el.split(' => ');
        quantity = Number(quantity);
        if (juices.hasOwnProperty(juice) === false) {
            juices[juice] = 0;
        }
        juices[juice] += quantity;

        if (juices[juice] >= 1000) {
            if (bottles.hasOwnProperty(juice) === false) {
                bottles[juice] = 0;
            }
            let pieces = Math.floor(juices[juice] / 1000);
            juices[juice] -= 1000 * pieces;
            bottles[juice] += pieces;
        }
    }

    let output = '';
    for (let key in bottles) {
        output += `${key} => ${bottles[key]}\n`;
    }

    return output;
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));