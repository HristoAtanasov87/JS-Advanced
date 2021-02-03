function solve() {
    let first;
    let second;
    let result;
    return {
        init: (selector1, selector2, resultSelector) => {
            first = document.querySelector(selector1);
            second = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(first.value) + Number(second.value);
        },
        subtract: () => {
            result.value = Number(first.value) - Number(second.value);

        }
    }
}

let obj = solve();
obj.init('#num1', '#num2', '#result');

let add = obj.add;
let subtract = obj.subtract;