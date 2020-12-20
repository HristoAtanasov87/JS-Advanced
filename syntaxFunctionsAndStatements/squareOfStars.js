function solve(input) {

    if (input) {
        for (let i = 1; i <= input; i++) {
            let result = "";
            for (let j = 1; j <= input; j++) {
                result += "* ";
            }
            console.log(result);
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            let result = "";
            for (let j = 1; j <= 5; j++) {
                result += "* ";
            }
            console.log(result);
        }
    }
}

solve();