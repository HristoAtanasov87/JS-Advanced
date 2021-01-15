function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let followingEl = result.slice(-k);
        let resultSecond = 0;
        for (let j = 0; j < followingEl.length; j++) {
            resultSecond += followingEl[j];
        }
        result.push(resultSecond);
    }
    return result;
}

console.log(solve(8, 2));