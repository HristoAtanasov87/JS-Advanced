function search() {
    const listElements = [...document.querySelectorAll('#towns>li')];
    const input = document.getElementById('searchText');
    const resultRef = document.getElementById('result');

    let matches = 0;
    for (let el of listElements) {
        if (el.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
            matches++;
        } else {
            el.style.fontWeight = '';
            el.style.textDecoration = '';
        }
    }

    resultRef.textContent = `${matches} matches found`;
}
