function cityObject(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            result.treasury += Math.floor(result.population * result.taxRate);
        },
        applyGrowth(percent) {
            result.population += Math.floor(result.population * percent / 100);
        },
        applyRecession(percent) {
            result.treasury -= Math.floor(result.treasury * percent / 100);
        }
    }

    return result;
}

const city = cityObject('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);


