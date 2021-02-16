function addDestination() {
    const divInputRef = document.getElementById('input');
    const destinationTableRef = document.getElementById('destinationsList');
    const divSummaryRef = document.getElementById('summaryBox');

    const cityInput = divInputRef.children[1];
    const countryInput = divInputRef.children[3];
    const seasonSelect = divInputRef.children[5];

    if (cityInput.value === '' || countryInput.value === '' || seasonSelect.value === '') {
        return;
    }

    const trElement = e('tr');
    const tdELementOne = e('td', `${cityInput.value}, ${countryInput.value}`);
    let season = seasonSelect.value;
    season = season[0].toUpperCase() + season.slice(1);
    const tdELementTwo = e('td', `${season}`);
    trElement.appendChild(tdELementOne);
    trElement.appendChild(tdELementTwo);
    destinationTableRef.appendChild(trElement);

    cityInput.value = '';
    countryInput.value = '';
    seasonSelect.value = '';

    if (season === 'Summer') {
        let update = Number(divSummaryRef.children[1].value) + 1;
        divSummaryRef.children[1].value = update;
    } else if (season === 'Autumn') {
        divSummaryRef.children[3].value = Number(divSummaryRef.children[3].value) + 1;
    } else if (season === 'Winter') {
        divSummaryRef.children[5].value = Number(divSummaryRef.children[5].value) + 1;
    } else if (season === 'Spring') {
        divSummaryRef.children[7].value = Number(divSummaryRef.children[7].value) + 1;
    }

    function e(tag, text, attribute, attributeValue) {
        const el = document.createElement(tag);

        if (attribute !== undefined && attributeValue !== undefined) {
            el.setAttribute(attribute, attributeValue);
        }

        if (text !== undefined) {
            el.textContent = text;
        }

        return el;
    }

}