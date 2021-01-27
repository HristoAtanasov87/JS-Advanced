function create(words) {
    const divRef = document.getElementById('content');

    words.forEach(element => {
        const divToAdd = document.createElement('div');
        const paragrahToAdd = document.createElement('p');
        paragrahToAdd.textContent = element;
        paragrahToAdd.style.display = 'none';

        divToAdd.appendChild(paragrahToAdd);
        divRef.appendChild(divToAdd);
    });

    divRef.addEventListener('click', showYourself);

    function showYourself(ev) {
        if (ev.target.tagName === 'DIV') {
            ev.target.lastChild.style.display = 'block';
        }
    }
}