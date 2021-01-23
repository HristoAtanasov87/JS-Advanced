function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const tableRef = [...document.querySelectorAll('tbody>tr')];
        const searchFieldInputRef = document.getElementById('searchField');
        const searchValue = searchFieldInputRef.value.toLowerCase();

        tableRef.map(i => i.textContent.toLowerCase().includes(searchValue) ? i.setAttribute('class', 'select') : i.removeAttribute('class'));

    }
}