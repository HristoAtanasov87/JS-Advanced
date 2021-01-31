function solution() {
    let str = '';

    return ({
        append,
        removeStart,
        removeEnd,
        print
    });

    function append(input) {
        str += input;
    }
    function removeStart(number) {
        str = str.slice(number);
    }
    function removeEnd(number) {
        str = str.slice(0, -number);
    }
    function print() {
        console.log(str);
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
