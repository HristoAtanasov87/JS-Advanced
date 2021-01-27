function encodeAndDecodeMessages() {
    const main = document.getElementById('main');
    main.addEventListener('click', encodeAndSend);

    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const choices = {
        encode: {
            text: textareas[0],
            button: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt() + 1);
            }
        },
        decode: {
            text: textareas[1],
            button: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt() - 1);
            }
        }
    }

    function encodeAndSend(ev) {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const choice = ev.target.textContent.includes('send') ? 'encode' : 'decode';

        const message = choices[choice].text.value
            .split('').map(choices[choice].func).join('');

        choices.encode.text.value = '';
        choices.decode.text.value = message;

    }
}