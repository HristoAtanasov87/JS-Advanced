function toggle() {
    const buttonReference = document.getElementsByClassName('button');
    const text = document.getElementById('extra');

    buttonText = buttonReference[0].textContent;

    if (buttonText === 'More') {
        buttonReference[0].textContent = 'Less';
        text.style.display = 'block';
    } else {
        buttonReference[0].textContent = 'More';
        text.style.display = 'none';
    }
}