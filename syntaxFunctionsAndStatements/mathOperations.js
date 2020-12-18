function solve(numOne, numTwo, operator) {
    let actions = {
        "+": (numOne, numTwo) => {
            console.log(numOne + numTwo);
        },
        "-": (numOne, numTwo) => {
            console.log(numOne - numTwo);
        },
        "*": (numOne, numTwo) => {
            console.log(numOne * numTwo);
        },
        "/": (numOne, numTwo) => {
            console.log(numOne / numTwo);
        },
        "%": (numOne, numTwo) => {
            console.log(numOne % numTwo);
        },
        "**": (numOne, numTwo) => {
            console.log(numOne ** numTwo);
        },
    };

    let action = actions[operator];
    action(numOne, numTwo);
}

solve(5, 6, '**');