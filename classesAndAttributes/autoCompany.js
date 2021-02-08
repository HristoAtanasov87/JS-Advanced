function solve(input) {
    let cars = {};

    input
        .map(el => el.split(' | '))
        .forEach(el => {
            let [brand, model, quantity] = el;
            quantity = Number(quantity);
            if (cars.hasOwnProperty(brand) === false) {
                cars[brand] = {};
            }
            if (cars[brand].hasOwnProperty(model) === false) {
                cars[brand][model] = 0;
            }
            cars[brand][model] += quantity;

        });


    let toPrint = Object.entries(cars);
    toPrint.forEach(el => {
        let [brand, models] = el;
        console.log(`${brand}`);
        for (let model in models) {
            console.log(`###${model} -> ${models[model]}`);
        }
    })
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);