let { Repository } = require("./solution.js");
const { expect } = require('chai');

describe("Tests …", function () {
    let instance = undefined;

    beforeEach(() => {
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        instance = new Repository(properties);
    });

    it('constructor', () => {
        expect(typeof instance.props).to.equal('object');
        expect(instance.props.name).to.equal('string');
        expect(instance.props.age).to.equal('number');
        expect(instance.props.birthday).to.equal('object');
        expect(typeof instance.data).to.equal('object');
        expect(typeof instance.nextId).to.equal('function');
        instance.nextId();
        expect(instance.nextId()).to.equal(1);
    })

    it('get count', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        expect(instance.count).to.equal(1);
    })

    it('add entity', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        expect(instance.data.get(0)).to.equal(entity);

        expect(instance.nextId()).to.equal(1);
        expect(instance.add(entity)).to.equal(2);

        let entity2 = {

            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        expect(() => { instance.update(0, entity2) }).to.throw(`Property name is missing from the entity!`);


        let entity4 = {
            name: "Pesho",
            age: 22,

        };
        expect(() => { instance.update(0, entity4) }).to.throw(`Property birthday is missing from the entity!`);

        let entity5 = {
            name: "Pesho",
            birthday: new Date(1998, 0, 7)
        };
        expect(() => { instance.update(0, entity5) }).to.throw(`Property age is missing from the entity!`);

        let entity3 = {
            name: "Pesho",
            age: '22',
            birthday: new Date(1998, 0, 7)
        };

        expect(() => { instance.update(0, entity3) }).to.throw(`Property age is not of correct type!`);

        let entity6 = {
            name: 1,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        expect(() => { instance.update(0, entity6) }).to.throw(`Property name is not of correct type!`);

        let entity7 = {
            name: 'Pesho',
            age: 22,
            birthday: undefined
        };

        expect(() => { instance.update(0, entity7) }).to.throw(`Property birthday is not of correct type!`);


    });

    it('getId', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);
        expect(instance.getId(0)).to.equal(entity);

        expect(() => { instance.getId(5) }).to.throw(`Entity with id: 5 does not exist!`);
        expect(() => { instance.getId(-1) }).to.throw(`Entity with id: -1 does not exist!`);
        expect(() => { instance.getId('a') }).to.throw(`Entity with id: a does not exist!`);
    });

    it('update', () => {
        let newEntity = {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        instance.add(entity);

        instance.update(0, newEntity);
        expect(instance.data.get(0)).to.equal(newEntity);
        expect(() => { instance.update(5, newEntity) }).to.throw(`Entity with id: 5 does not exist!`);
        expect(() => { instance.update('a', newEntity) }).to.throw(`Entity with id: a does not exist!`);

        let entity2 = {

            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        expect(() => { instance.update(0, entity2) }).to.throw(`Property name is missing from the entity!`);


        let entity4 = {
            name: "Pesho",
            age: 22,

        };
        expect(() => { instance.update(0, entity4) }).to.throw(`Property birthday is missing from the entity!`);

        let entity5 = {
            name: "Pesho",
            birthday: new Date(1998, 0, 7)
        };
        expect(() => { instance.update(0, entity5) }).to.throw(`Property age is missing from the entity!`);

        let entity3 = {
            name: "Pesho",
            age: '22',
            birthday: new Date(1998, 0, 7)
        };

        expect(() => { instance.update(0, entity3) }).to.throw(`Property age is not of correct type!`);

        let entity6 = {
            name: 1,
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        expect(() => { instance.update(0, entity6) }).to.throw(`Property name is not of correct type!`);

        let entity7 = {
            name: 'Pesho',
            age: 22,
            birthday: undefined
        };

        expect(() => { instance.update(0, entity7) }).to.throw(`Property birthday is not of correct type!`);
    });

    it('del', () => {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

        instance.add(entity);
        expect(instance.del(0)).to.be.undefined;
        expect(() => { instance.del(5) }).to.throw(`Entity with id: 5 does not exist!`);
        expect(() => { instance.del('a') }).to.throw(`Entity with id: a does not exist!`);
        expect(() => { instance.del(-1) }).to.throw(`Entity with id: -1 does not exist!`);

    });

});
