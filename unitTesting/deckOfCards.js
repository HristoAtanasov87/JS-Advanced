function printDeckOfCards(cards) {
    let result = [];
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const utf = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    for (let el of cards) {
        let face = '';
        let suit = '';

        if (el.length < 3) {
            [face, suit] = el.split('');
        } else {
            face = '10';
            suit = el[2];
        }


        if (validFaces.includes(face) === false || Object.keys(utf).includes(suit) === false) {
            return console.log(`Invalid card: ${face}${suit}`);
        } else {
            result.push(createCard(face, suit));
        }
    }

    function createCard(face, suit) {

        const card = `${face.toUpperCase()}${utf[suit.toUpperCase()]}`

        return card;
    }

    return result.join(' ');
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
