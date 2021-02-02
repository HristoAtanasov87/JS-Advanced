function solve(array, start, end) {
    if (Array.isArray(array) === false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= array.length) {
        end = array.length - 1;
    }

    const result = array.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);
    return result;
}