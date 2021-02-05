const { expect, assert } = require('chai');
const lookupChar = require('./charLookup');
const charLookup = require('./charLookup');

describe('charLookup', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));
    });

    it('', () => {
        assert.equal(lookupChar('abv', -1), "Incorrect index");
        assert.equal(lookupChar('abv', 4), "Incorrect index");
    });

    it('', () => {
        assert.equal(lookupChar('abv', 0), 'a');
        assert.equal(lookupChar('abv', 2), 'v');
    })
})