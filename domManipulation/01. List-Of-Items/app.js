function addItem() {
    const inputRef = document.getElementById('newItemText');
    const ulRef = document.getElementById('items');

    const newEl = document.createElement('li');
    newEl.textContent = inputRef.value
    ulRef.appendChild(newEl);
    inputRef.value = '';
}