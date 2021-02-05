function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

// unit testing

const { expect } = require('chai');

describe('isOddOrEven', () => {
    it('check if number', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });

    it('check if array', () => {
        expect(isOddOrEven(['a'])).to.be.equal(undefined);
    })

    it('check odd if valid input', () => {
        expect(isOddOrEven('a')).to.be.equal('odd');
    })

    it('check even if valid input', () => {
        expect(isOddOrEven('ab')).to.be.equal('even');
    })

    //test overloading

    it('check odd if valid input', () => {
        expect(isOddOrEven('abcde')).to.be.equal('odd');
    })

    it('check even if valid input', () => {
        expect(isOddOrEven('abcdefgh')).to.be.equal('even');
    })
});

