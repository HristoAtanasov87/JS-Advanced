const { expect } = require('chai');
const createCalculator = require('./addSubtract');

describe('test createCalculator', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = createCalculator();
    });

    it('is instance correct', () => {
        expect(instance.hasOwnProperty('add')).to.be.true;
        expect(instance.hasOwnProperty('subtract')).to.be.true;
        expect(instance.hasOwnProperty('get')).to.be.true;
    });

    it('internal sum', () => {
        expect(instance.value).to.be.undefined;
    });

    it('add', () => {
        instance.add(5);
        expect(instance.get()).to.equal(5);
        instance.add('1');
        expect(instance.get()).to.equal(6);
        expect(instance.add('a')).to.be.undefined;
    });

    it('subtract', () => {
        instance.subtract(5);
        expect(instance.get()).to.equal(-5);
        instance.subtract('1');
        expect(instance.get()).to.equal(-6);
        expect(instance.subtract('a')).to.be.undefined;
    })

    it('get', () => {
        expect(instance.get()).to.equal(0);
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })
})

