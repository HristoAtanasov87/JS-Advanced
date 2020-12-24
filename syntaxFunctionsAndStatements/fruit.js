function solve(fruit, weightInGrams, price) {
    console.log(`I need $${(weightInGrams / 1000 * price).toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)