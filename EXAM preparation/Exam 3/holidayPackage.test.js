const HolidayPackage = require('./holidayPackage');
const { expect } = require('chai');

describe('holiday package tests', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new HolidayPackage('Varna', 'Summer');
    });

    it('constructor', () => {
        expect(typeof instance.destination).to.equal('string');
        expect(typeof instance.season).to.equal('string');
        expect(instance.destination).to.equal('Varna');
        expect(instance.season).to.equal('Summer');
        expect(Array.isArray(instance.vacationers)).to.be.true;
        expect(instance.vacationers.length).to.equal(0);
        expect(typeof instance.insuranceIncluded).to.equal('boolean');
        expect(instance.insuranceIncluded).to.be.false;
    });

    it('addVacationer', () => {
        expect(() => { instance.addVacationer(1) }).to.throw('Vacationer name must be a non-empty string');
        expect(() => { instance.addVacationer(' ') }).to.throw('Vacationer name must be a non-empty string');
        expect(() => { instance.addVacationer('Hristo') }).to.throw("Name must consist of first name and last name");
        instance.addVacationer('Hristo Atanasov');
        expect(instance.vacationers[0]).to.equal('Hristo Atanasov');
    });

    it('showVacationers', () => {
        expect(instance.showVacationers()).to.equal('No vacationers are added yet');
        instance.addVacationer('Hristo Atanasov');
        instance.addVacationer('Hristo Atanasov');
        expect(instance.showVacationers()).to.equal('Vacationers:\nHristo Atanasov\nHristo Atanasov');

    });

    it('insurance getter and setter', () => {
        expect(instance.insuranceIncluded).to.be.false;
        instance.insuranceIncluded = true;
        expect(instance.insuranceIncluded).to.be.true;
        expect(() => { instance.insuranceIncluded = 'a' }).to.throw('Insurance status must be a boolean');
        expect(() => { instance.insuranceIncluded = 1 }).to.throw('Insurance status must be a boolean');

    });

    it('generate holidayPackage', () => {
        expect(() => { instance.generateHolidayPackage() }).to.throw('There must be at least 1 vacationer added');
        instance.addVacationer('Hristo Atanasov');
        expect(instance.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nHristo Atanasov\nPrice: 600');
        instance.insuranceIncluded = true;
        expect(instance.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nHristo Atanasov\nPrice: 700');

        let instance2 = new HolidayPackage('Varna', 'Winter');
        instance2.addVacationer('Hristo Atanasov');
        instance2.insuranceIncluded = true;
        expect(instance2.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nHristo Atanasov\nPrice: 700');

        let instance3 = new HolidayPackage('Varna', 'Spring');
        instance3.addVacationer('Hristo Atanasov');
        expect(instance3.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nHristo Atanasov\nPrice: 400');
        instance3.insuranceIncluded = true;
        expect(instance3.generateHolidayPackage()).to.equal('Holiday Package Generated\nDestination: Varna\nVacationers:\nHristo Atanasov\nPrice: 500');
    })
});