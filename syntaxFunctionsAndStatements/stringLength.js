function solve(firstWord, secondWord, thirdWord) {
    let totalSum = 0;
    let avgLength = 0;

    let firstWordLength = firstWord.length;
    let secondWordLength = secondWord.length;
    let thirdWordLength = thirdWord.length;

    totalSum = firstWordLength + secondWordLength + thirdWordLength;
    avgLength = Math.floor(totalSum / 3);

    console.log(totalSum);
    console.log(avgLength);
}