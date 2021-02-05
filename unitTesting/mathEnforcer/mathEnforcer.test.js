const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('addFive', () => {
            expect(mathEnforcer.addFive('a')).to.be.equal(undefined);
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(1.2)).to.be.closeTo(6.2, 0.01);
        })
    });

    describe('subtractTen', () => {
        it('subtractTen', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
            expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.01);
        });
    });

    describe('sum', () => {
        it('sum', () => {
            expect(mathEnforcer.sum('a', 1)).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, 'a')).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
            expect(mathEnforcer.sum(-1, 1)).to.be.equal(0);
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01);
        });
    });
});