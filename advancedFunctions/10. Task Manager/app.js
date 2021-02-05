function solve() {
    const addButton = document.getElementById('add').addEventListener('click', add);
    const sectionsRef = document.querySelectorAll('section');

    const openSectionRef = sectionsRef[1];
    const inProgressSectionRef = sectionsRef[2];
    const completeSectionRef = sectionsRef[3];

    function add(ev) {
        ev.preventDefault();
        const taskRef = document.getElementById('task');
        const descriptionRef = document.getElementById('description');
        const dateRef = document.getElementById('date');

        if (taskRef.value !== '' && descriptionRef.value !== '' && dateRef.value !== '') {
            const articleElement = generateElement('article');
            articleElement.addEventListener('click', moveOrDelete);
            const h3Element = generateElement('h3', taskRef.value);
            const descriptionElement = generateElement('p', `Description: ${descriptionRef.value}`);
            const dateElement = generateElement('p', `Due Date: ${dateRef.value}`);

            articleElement.appendChild(h3Element);
            articleElement.appendChild(descriptionElement);
            articleElement.appendChild(dateElement);

            const divElement = generateElement('div', undefined, 'class', 'flex');

            const buttonStart = generateElement('button', 'Start', 'class', 'green');
            // buttonStart.addEventListener('click', moveToOpen);
            const buttonDelete = generateElement('button', 'Delete', 'class', 'red');
            // buttonDelete.addEventListener('click', deleteTask);

            divElement.appendChild(buttonStart);
            divElement.appendChild(buttonDelete);
            articleElement.appendChild(divElement);

            openSectionRef.children[1].appendChild(articleElement);
        }
    }

    function moveOrDelete(ev) {
        console.log(ev);
        if (ev.target.className === 'green') {
            const toMove = ev.currentTarget;
            ev.target.className = 'red';
            ev.target.textContent = 'Delete';
            ev.target.nextElementSibling.className = 'orange';
            ev.target.nextElementSibling.textContent = 'Finish';

            inProgressSectionRef.children[1].appendChild(toMove);

        } else if (ev.target.className === 'red') {
            console.log(ev.currentTarget);
            ev.currentTarget.remove();

        } else if (ev.target.className === 'orange') {
            const toMove = ev.currentTarget;
            completeSectionRef.children[1].appendChild(toMove);
            ev.target.parentNode.remove();
        }
    }


    function generateElement(type, text, attribute, attributeText) {
        let element = document.createElement(type);

        if (text != undefined) {
            element.textContent = text;
        }

        if (type === 'div' || type === 'button') {
            element.setAttribute(attribute, attributeText);
        }

        return element;
    }
}