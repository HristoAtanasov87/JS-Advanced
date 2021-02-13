function solve() {
    const lectureNameRef = document.querySelector('input[name=lecture-name]');
    const lectureDateRef = document.querySelector('input[name=lecture-date]');
    const lectureModuleRef = document.querySelector('select[name=lecture-module]');
    const formRef = document.querySelector('form').addEventListener('click', checkValidation);

    const trainingsDivRef = document.querySelector('.modules');
    trainingsDivRef.addEventListener('click', removeTraining);

    function checkValidation(ev) {
        ev.preventDefault();
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        if (lectureNameRef.value === '' || lectureDateRef.value === '' || lectureModuleRef.value === 'Select module') {
            return;
        }

        let [date, time] = lectureDateRef.value.split('T');

        const divModule = e('div', undefined, 'class', 'module');
        const h3 = e('h3', `${(lectureModuleRef.value).toUpperCase()}-MODULE`);
        const ul = e('ul');
        const li = e('li', undefined, 'class', 'flex');
        const h4 = e('h4', `${lectureNameRef.value} - ${date.split('-').join('/')} - ${time}`);
        const button = e('button', 'Del', 'class', 'red');

        li.appendChild(h4);
        li.appendChild(button);

        const trainingsArray = Array.from(document.querySelectorAll('.modules>div'));
        if (trainingsArray.length > 0) {
            let isAppended = false;
            for (let divs of trainingsArray) {
                if (divs.children[0].textContent === h3.textContent) {
                    divs.children[1].appendChild(li);
                    isAppended = true;
                    let liArray = Array.from(divs.children[1].children).sort((a, b) => {
                        toCompareA = a.children[0].textContent.split(' - ');
                        toCompareB = b.children[0].textContent.split(' - ');
                        return toCompareA[1].localeCompare(toCompareB[1]) || toCompareA[2].localeCompare(toCompareB[2]);

                    })
                    liArray.forEach(el => divs.children[1].appendChild(el));
                }
            }
            if (isAppended === false) {
                ul.appendChild(li);
                divModule.appendChild(h3);
                divModule.appendChild(ul);
                trainingsDivRef.appendChild(divModule);
            }

        } else {
            ul.appendChild(li);
            divModule.appendChild(h3);
            divModule.appendChild(ul);
            trainingsDivRef.appendChild(divModule);
        }


    }

    function removeTraining(ev) {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }


        if (ev.target.parentNode.parentNode.children.length > 1) {
            ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
        } else {
            ev.target.parentNode.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode.parentNode);
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

        return el
    }
};