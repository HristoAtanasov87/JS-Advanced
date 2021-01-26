function deleteByEmail() {
    let inputRef = document.querySelector('input[name="email"]');
    const tableDataRef = Array.from(document.querySelectorAll('tbody>tr>td'));
    const outputRef = document.getElementById('result');

    tableDataRef.forEach(el => {

        if (el.textContent.includes(inputRef.value)) {
            el.parentNode.remove();
            outputRef.textContent = '';
            inputRef.value = '';
        } else {
            outputRef.textContent = 'Not found.'
        }
    })


}