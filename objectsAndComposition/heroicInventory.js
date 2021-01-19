function solve(inputArray) {
    let result = [];

    inputArray.map(objectFill);

    return JSON.stringify(result);

    function objectFill(element, index) {
        let [name, level, items] = element.split(" / ");
        level = Number(level);

        result.push({
            name,
            level,
            items: []
        })
        if (items != undefined) {
            // result[index]['items'] = [];
            items.split(', ').map(el => result[index].items.push(el));
        }

    }
}




console.log(solve(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));