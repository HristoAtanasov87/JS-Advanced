function solve(input) {
    let [town, lat, long] = processColumns(input);

    let result = [];

    for (let el of input) {
        let data = el
            .split('|')
            .map(i => i.trim())
            .filter(x => x != '');

        let [townName, coordinateOne, coordinateTwo] = data;
        coordinateOne = Number(coordinateOne).toFixed(2);
        coordinateTwo = Number(coordinateTwo).toFixed(2);
        coordinateOne = Number(coordinateOne);
        coordinateTwo = Number(coordinateTwo);


        result.push({
            [town]: townName,
            [lat]: coordinateOne,
            [long]: coordinateTwo
        });
    }

    function processColumns(array) {
        let elements = array
            .shift()
            .split('|')
            .map(el => el.trim())
            .filter(x => x != '');

        return elements
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));