function solve(input) {
    let product = "";
    let calories = "";

    let productsObject = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            productsObject[input[i]] = Number(input[++i]);
        }
    }

    console.log(productsObject);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])