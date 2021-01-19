function cityRegistry(inputArray) {
    let result = {};

    for (let el of inputArray) {
        let [city, population] = el.split(' <-> ');
        population = Number(population);

        if (!result.hasOwnProperty(city)) {
            result[city] = 0;
        }
        result[city] += population;
    }

    for (let [city, population] of Object.entries(result)) {
        console.log(`${city} : ${population}`);
    }
}

cityRegistry(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);