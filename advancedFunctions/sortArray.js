function solve(array, way) {
    const options = {
        asc: function (array) {
            return array.sort((a, b) => a - b);
        },
        desc: function (array) {
            return array.sort((a, b) => b - a);
        }
    }

    return options[way](array);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));