function solution() {
    const allSections = document.querySelectorAll('section');
    const addGiftsSection = allSections[0].addEventListener('click', addItem);
    const listOfGiftsSection = allSections[1];
    listOfGiftsSection.addEventListener('click', send);
    const sentGiftsSection = allSections[2];
    const discardedGiftsSection = allSections[3];
    const input = document.querySelector('div>input');

    let toSort = [];

    function addItem(ev) {
        ev.preventDefault();
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const liElement = e('li', input.value, 'class', 'gift');
        input.value = '';
        const sendButton = e('button', 'Send', 'id', 'sendButton');
        const discardButton = e('button', 'Discard', 'id', 'discardButton');

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        toSort.push(liElement);
        toSort
            .sort((a, b) => {
                let criteriaA = a.textContent;
                let criteriaB = b.textContent;
                return criteriaA.localeCompare(criteriaB);
            })
            .forEach((li) => {
                listOfGiftsSection.children[1].appendChild(li);
            });

    }

    function send(ev) {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        if (ev.target.textContent === 'Send') { // вместо да триеш бутоните направи си просто нови елементи и ги добави на секшъните. 
            //addEventListener('click', () => sendGift(name, gift)) - евент параметъра влиза във първите скоби и така не го ползваме като викаме функцията sendGift, а и подаваме параметри и те са директна референция към елементите които ни трябват да изтрием и преместим.
            let toMove = ev.target.parentNode;
            sentGiftsSection.children[1].appendChild(toMove);
            let index = toSort.indexOf(toMove);
            toSort.splice(index, 1);
            while (toMove.children.length > 0) {
                toMove.removeChild(toMove.lastElementChild);
            }
        }

        if (ev.target.textContent === 'Discard') {
            let toMove = ev.target.parentNode;
            discardedGiftsSection.children[1].appendChild(toMove);
            let index = toSort.indexOf(toMove);
            toSort.splice(index, 1);
            while (toMove.children.length > 0) {
                toMove.removeChild(toMove.lastElementChild);
            }
        }

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