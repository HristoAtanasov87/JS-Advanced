function solve() {
    const textToEdit = document.getElementById('input').value;
    const outputRef = document.getElementById('output');
    while (outputRef.children.length) {
        let child = outputRef.lastChild;
        outputRef.removeChild(child);
    }

    let sentences = textToEdit.split('.').slice().filter(x => x.length > 1).map(el => el.trim());
    let result = [];

    let stringToPush = '';
    while (sentences.length) {
        for (let i = 0; i < 3; i++) {
            if (sentences.length === 0) {
                stringToPush;
                break;
            }
            stringToPush += `${sentences.shift()}. `;
        }
        result.push(stringToPush.trim());
        stringToPush = '';
    }


    for (let p of result) {
        let node = document.createElement('p');
        node.textContent = p;
        outputRef.appendChild(node);
    }
}