class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }



    newCustomer(customer) {
        if (this.allCustomers.find(el => el.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let index = this.allCustomers.findIndex(el => el.personalId === personalId);
        if (index === -1) {
            throw new Error('We have no customer with this ID!');
        }

        if (!this.allCustomers[index].hasOwnProperty('totalMoney')) {
            this.allCustomers[index]['totalMoney'] = 0;
        }
        this.allCustomers[index]['totalMoney'] += amount;

        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        if (!this.allCustomers[index].hasOwnProperty('transactions')) {
            this.allCustomers[index]['transactions'] = [];
        }
        this.allCustomers[index]['transactions'].push(`${firstName} ${lastName} made deposit of ${amount}$!`);

        return `${this.allCustomers[index]['totalMoney']}$`;

    }

    withdrawMoney(personalId, amount) {
        let index = this.allCustomers.findIndex(el => el.personalId === personalId);
        if (index === -1) {
            throw new Error('We have no customer with this ID!');
        }

        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        if (this.allCustomers[index].totalMoney < amount) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        } else {
            this.allCustomers[index].totalMoney -= amount;
        }

        this.allCustomers[index]['transactions'].push(`${firstName} ${lastName} withdrew ${amount}$!`);

        return `${this.allCustomers[index]['totalMoney']}$`;
    }

    customerInfo(personalId) {
        let index = this.allCustomers.findIndex(el => el.personalId === personalId);
        if (index === -1) {
            throw new Error('We have no customer with this ID!');
        }

        let firstName = this.allCustomers[index].firstName;
        let lastName = this.allCustomers[index].lastName;

        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${firstName} ${lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${this.allCustomers[index]['totalMoney']}$`);
        result.push('Transactions:');
        let newArray = this.allCustomers[index]['transactions'].map((el, index) => `${index + 1}. ${el}`);
        result.push(newArray.reverse().join('\n'));


        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
