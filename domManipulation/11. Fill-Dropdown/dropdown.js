function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const selectRef = document.getElementById('menu');

    const optionTag = document.createElement('option');
    optionTag.value = inputValue.value;
    optionTag.textContent = inputText.value;

    selectRef.appendChild(optionTag);

    inputText.value = '';
    inputValue.value = '';

}