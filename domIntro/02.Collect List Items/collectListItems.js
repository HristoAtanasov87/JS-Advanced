function extractText() {
    const liElements = [...document.getElementsByTagName('li')]
    const liElementsTextContent = liElements.map(x => x = x.textContent);
    const textArea = document.getElementById('result');
    textArea.textContent = liElementsTextContent.join('\n');
}

