function smallestTwoNumbers(inputArray) {
    inputArray.sort((a, b) => a - b);
    let smallest = inputArray.slice(0, 2);

    return smallest.join(" ")
}

solve([3, 0, 10, 4, 7, 31, -1, -5]);