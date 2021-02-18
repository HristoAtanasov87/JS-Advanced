function solve() {
    const divContainerRef = document.getElementById('container');
    const inputNameRef = divContainerRef.children[0];
    const inputAgeRef = divContainerRef.children[1];
    const inputKindRef = divContainerRef.children[2];
    const inputOwnerRef = divContainerRef.children[3];
    divContainerRef.children[4].addEventListener('click', addPet);
    const ulAdoption = document.querySelector('#adoption ul');
    const ulAdopted = document.querySelector('#adopted ul');


    function addPet(ev) {
        ev.preventDefault();
        let name = inputNameRef.value;
        let age = Number(inputAgeRef.value);
        let kind = inputKindRef.value;
        let owner = inputOwnerRef.value;

        if (name === '' || age === '' || Number.isNaN(age) === true || kind === '' || owner === '') {
            return;
        }


        const liElement = e('li');
        const pElement = document.createElement('p');
        pElement.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
        liElement.appendChild(pElement);

        const spanElement = e('span', `Owner: ${owner}`);
        const buttonElement = e('button', 'Contact with owner');
        buttonElement.addEventListener('click', transfer);
        liElement.appendChild(spanElement);
        liElement.appendChild(buttonElement);

        inputNameRef.value = '';
        inputAgeRef.value = '';
        inputKindRef.value = '';
        inputOwnerRef.value = '';

        ulAdoption.appendChild(liElement);
    }

    function transfer(ev) {
        const liParent = ev.target.parentNode;
        let toRemove = liParent.lastElementChild;
        liParent.removeChild(toRemove);

        const divElement = e('div');
        const inputElement = e('input', undefined, 'placeholder', 'Enter your names');
        const buttonElement = e('button', 'Yes! I take it!');
        buttonElement.addEventListener('click', moveIt);

        divElement.appendChild(inputElement);
        divElement.appendChild(buttonElement);
        liParent.appendChild(divElement);
    }

    function moveIt(ev) {
        let inputName = ev.target.previousElementSibling.value;
        if (inputName === '') {
            return;
        }

        const liParent = ev.target.parentNode.parentNode;
        liParent.children[1].textContent = `New Owner: ${inputName}`;
        liParent.children[2].remove();

        const buttonElement = e('button', 'Checked');
        buttonElement.addEventListener('click', checked);
        liParent.appendChild(buttonElement);
        ulAdopted.appendChild(liParent);
    }

    function checked(ev) {
        ev.target.parentNode.remove();
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

