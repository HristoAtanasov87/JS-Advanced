class Vacationer {
    constructor(fullName) {
        this.fullName = fullName;
        this.idNumber = '';
        if (arguments.length !== 2) {
            this.creditCard = {
                cardNumber: 1111,
                expirationDate: '',
                securityNumber: 111
            }
        } else {
            if (arguments[1].length < 3) {
                throw new Error("Missing credit card information");
            }
            let [cardNumber, expirationDate, securityNumber] = arguments[1];
            if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number' || typeof expirationDate !== 'string') {
                throw new Error("Invalid credit card details");
            }
            this.creditCard = {
                cardNumber,
                expirationDate,
                securityNumber
            }
        }
        this.wishList = [];
        this.generateIDNumber();
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(valueArray) {
        if (valueArray.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }

        let newValue = [];
        for (let el of valueArray) {
            let pattern = /^[A-Z][a-z]+$/gm;
            if (pattern.test(el)) {
                newValue.push(el);
            }
        }
        if (newValue.length === 3) {
            let [firstName, middleName, lastName] = newValue;
            this._fullName = {
                firstName,
                middleName,
                lastName
            }
        } else {
            throw new Error("Invalid full name");
        }
    }

    generateIDNumber() {
        let initialId = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
        let lastLetter = this.fullName.lastName[this.fullName.lastName.length - 1];
        switch (lastLetter) {
            case 'a':
                this.idNumber = initialId + '8';
                break;
            case 'e':
                this.idNumber = initialId + '8';
                break;
            case 'o':
                this.idNumber = initialId + '8';
                break;
            case 'i':
                this.idNumber = initialId + '8';
                break;
            case 'u':
                this.idNumber = initialId + '8';
                break;
            default:
                this.idNumber = initialId + '7';
                break;
        }
    }

    addCreditCardInfo(input) {
        if (input.length < 3) {
            throw new Error("Missing credit card information");
        }

        let [cardNumber, expirationDate, securityNumber] = input;
        if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number' || typeof expirationDate !== 'string') {
            throw new Error("Invalid credit card details");
        }

        this.creditCard = {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securityNumber: securityNumber
        }
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }

        this.wishList.push(destination);
        this.wishList.sort((a, b) => {
            return a.length - b.length || a.localeCompare(b);
        });
    }

    getVacationerInfo() {
        let result = [];

        result.push(`Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`);
        result.push(`ID Number: ${this.idNumber}`);
        result.push('Wishlist:');
        result.push(this.wishList.length === 0 ? 'empty' : this.wishList.join(', '));
        result.push('Credit Card:');
        result.push(`Card Number: ${this.creditCard.cardNumber}`);
        result.push(`Expiration Date: ${this.creditCard.expirationDate}`);
        result.push(`Security Number: ${this.creditCard.securityNumber}`);

        return result.join('\n');
    }
}

let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
// let vacationer2 = new Vacationer(["Vania", "Ivanova", "Zhivk0va"]);
// let vacationer3 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
//     [123456789, "10/01/2018"]);
// let vacationer4 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
//     ['123456789', "10/01/2018", 777]);
// let vacationer5 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
//     [123456789, "10/01/2018", '777']);
// let vacationer6 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
//     [123456789, 10 / 01 / 2018, 777]);

// vacationer1.addCreditCardInfo([123456789, "10/01/2018", 777]);
// vacationer1.addCreditCardInfo(['123456789', "10/01/2018", 777]);
// vacationer1.addCreditCardInfo([123456789, 10 / 01 / 2018, 777]);
// vacationer1.addCreditCardInfo([123456789, "10/01/2018", '777']);
vacationer1.addCreditCardInfo([123456789, "10/01/2018"]);
vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');
vacationer1.addDestinationToWishList('AAAAA');
vacationer1.addDestinationToWishList('AAAAA');


console.log(vacationer1.getVacationerInfo());
