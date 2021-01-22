function sumTable() {
    const firstTable = Array.from(document.querySelectorAll('table tr'));

    let lastColumnArray = [];
    for (let i = 1; i < firstTable.length - 1; i++) {
        lastColumnArray.push(Number(firstTable[i].children[1].textContent));
    }

    const totalCost = document.getElementById('sum');
    totalCost.textContent = lastColumnArray.reduce((a, c) => a + c, 0)
}