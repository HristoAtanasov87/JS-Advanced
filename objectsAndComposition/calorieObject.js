function solve(input) {
    let myObj = {};
    input.map(objectFill);

    return myObj

    function objectFill(el, index, array) {
        if (index % 2 === 0) {
            myObj[el] = Number(array[index + 1]);
        }
    }
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));