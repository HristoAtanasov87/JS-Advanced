function solve(inputObject) {
    let storage = {
        engine: [
            { power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }
        ],
        carriage: [
            { type: 'hatchback', color: null }, { type: 'coupe', color: null }
        ]
    };

    let result = {};

    result.model = inputObject.model;
    result.engine = getEngine(inputObject.power);
    result.carriage = getCarriage(inputObject.color, inputObject.carriage);
    result.wheels = getWheelsize(inputObject.wheelsize);

    return result;

    function getEngine(power) {
        storage.engine.sort((a, b) => a.power - b.power);
        for (let el of storage.engine) {
            if (el.power >= power) {
                return el;
            }
        }
    }

    function getCarriage(color, type) {
        for (let el of storage.carriage) {
            if (el.type === type) {
                return { 'type': type, 'color': color }
            }
        }
    }

    function getWheelsize(size) {
        if (size % 2 === 0) {
            size -= 1;
        }

        return [size, size, size, size];
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));