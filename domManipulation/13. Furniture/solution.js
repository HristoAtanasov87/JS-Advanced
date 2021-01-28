function solve() {
    const tbodyRef = document.querySelector('tbody');
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);

    function generate(ev) {
        const furnitureList = JSON.parse(textareas[0].value);
        furnitureList.forEach(el => tbodyRef.appendChild(processFurniture(el)));
    }

    function buy(ev) {
        const data = Array.from(tbodyRef.querySelectorAll('input[type="checkbox"]:checked'))
            .map(el => el.parentNode.parentNode); //array of all checked table rows

        let result = {
            names: [],
            totalPrice: 0,
            avgDecoration: 0
        }

        for (let tableRow of data) {
            const name = tableRow.children[1].children[0].textContent;
            result.names.push(name);

            result.totalPrice += Number(tableRow.children[2].children[0].textContent);

            result.avgDecoration += Number(tableRow.children[3].children[0].textContent);
        }

        // const result = data.reduce((acc, currentEl) => {
        //     const eachRow = currentEl.children;
        //     const name = eachRow[1].children[0].textContent;
        //     acc.names.push(name);

        //     acc.totalPrice += Number(eachRow[2].children[0].textContent);

        //     acc.avgDecoration += Number(eachRow[3].children[0].textContent);

        //     return acc;
        // }, {
        //     names: [],
        //     totalPrice: 0,
        //     avgDecoration: 0
        // });

        const furnitureBought = textareas[1];

        furnitureBought.value = `Bought furniture: ${result.names.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.avgDecoration / result.names.length}`
    }

    function processFurniture(myObj) {
        const cellImg = document.createElement('img');
        const cellName = document.createElement('p');
        const cellPrice = document.createElement('p');
        const cellDecFactor = document.createElement('p');
        const checkboxCell = document.createElement('input');
        cellImg.src = myObj.img;
        cellName.textContent = myObj.name;
        cellPrice.textContent = myObj.price;
        cellDecFactor.textContent = myObj.decFactor;
        checkboxCell.type = 'checkbox';

        const tdImg = document.createElement('td');
        tdImg.appendChild(cellImg);
        const tdName = document.createElement('td');
        tdName.appendChild(cellName);
        const tdPrice = document.createElement('td');
        tdPrice.appendChild(cellPrice);
        const tdDecFactor = document.createElement('td');
        tdDecFactor.appendChild(cellDecFactor);
        const tdCheckbox = document.createElement('td');
        tdCheckbox.appendChild(checkboxCell);

        const tableRow = document.createElement('tr');

        tableRow.appendChild(tdImg);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdPrice);
        tableRow.appendChild(tdDecFactor);
        tableRow.appendChild(tdCheckbox);

        return tableRow;
    }
}   