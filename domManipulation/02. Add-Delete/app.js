function addItem() {
    const inputRef = document.getElementById('newText');
    const ulRef = document.getElementById('items');

    const newEl = document.createElement('li');
    newEl.textContent = inputRef.value;
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.textContent = '[Delete]';
    inputRef.value = '';

    ulRef.addEventListener('click', removeLi);
    function removeLi(ev) {
        if (ev.target.tagName == 'A') {

            ev.target.parentNode.remove();
        }
    }

    newEl.appendChild(newLink);
    ulRef.appendChild(newEl);

}