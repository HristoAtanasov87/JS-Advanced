const pizzUni = require('./pizzaPlace');
const { expect } = require('chai');

describe('pizzUni tests', () => {
    it('makeAnOrder', () => {
        let myObj1 = {};
        let myObj2 = { orderedPizza: 'pizza' };
        let myObj3 = { orderedDrink: 'water' };
        let myObj4 = { orderedPizza: 'pizza', orderedDrink: 'water' };

        expect(() => { pizzUni.makeAnOrder(myObj1) }).to.throw('You must order at least 1 Pizza to finish the order.')
        expect(pizzUni.makeAnOrder(myObj2)).to.equal(`You just ordered pizza`);
        expect(() => { pizzUni.makeAnOrder(myObj3) }).to.throw('You must order at least 1 Pizza to finish the order.');
        expect(pizzUni.makeAnOrder(myObj4)).to.equal(`You just ordered pizza and water.`);

    });

    it('getRemainingWork', () => {
        let myArr1 = [];
        let myArr2 = [{ pizzaName: 'pizza', status: 'ready' }];
        let myArr3 = [{ pizzaName: 'pizza', status: 'preparing' }];

        expect(pizzUni.getRemainingWork(myArr1)).to.equal('All orders are complete!');
        expect(pizzUni.getRemainingWork(myArr2)).to.equal('All orders are complete!');
        expect(pizzUni.getRemainingWork(myArr3)).to.equal(`The following pizzas are still preparing: pizza.`);
    });

    it('orderType', () => {
        expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
        expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
    })
})