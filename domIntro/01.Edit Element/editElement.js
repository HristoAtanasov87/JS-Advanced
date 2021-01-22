function editElement(ref, match, replacer) {
    const elementTextContent = ref.textContent;
    const pattern = new RegExp(match, 'g');
    const newContent = elementTextContent.replace(pattern, replacer);

    ref.textContent = newContent;
}