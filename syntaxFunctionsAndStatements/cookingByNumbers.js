function solve(input) {
    let actions = {
        chop: (number) => {
            return number / 2;
        },
        dice: (number) => {
            return Math.sqrt(number);
        },
        spice: (number) => {
            return number + 1;
        },
        bake: (number) => {
            return number * 3;
        },
        fillet: (number) => {
            return number - (number * 0.2);
        }
    }

    let number = Number(input.shift());

    for (let element of input) {
        let result = actions[element];
        number = result(number);
        console.log(number);
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);