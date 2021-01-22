function extract(content) {
    const textToRegExp = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;

    let matchesFound = pattern.exec(textToRegExp);
    let result = [];
    while (matchesFound) {
        result.push(matchesFound[1]);

        matchesFound = pattern.exec(textToRegExp);
    }

    return (result.join('; '));
}