function solve(input) {
    let [x1, y1, x2, y2] = input;

    let distanceToCenterOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanceToCenterTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let distanceBetween = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

    let checkOne = distanceToCenterOne.toString();
    let checkTwo = distanceToCenterTwo.toString();
    let checkThree = distanceBetween.toString();

    if (checkOne.includes(".")) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if (checkTwo.includes(".")) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }

    if (checkThree.includes(".")) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
}

solve([2, 1, -1, 1]);