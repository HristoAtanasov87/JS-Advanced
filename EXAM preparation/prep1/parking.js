class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error("Not enough parking space.");
        }

        this.vehicles.push({ carModel, carNumber, payed: false })
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        if (!this.vehicles.find(el => el.carNumber === carNumber)) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (this.vehicles.find(el => el.payed === false)) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let index = this.vehicles.findIndex(el => el.carNumber === carNumber);
        this.vehicles.splice(index, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        if (!this.vehicles.find(el => el.carNumber === carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (this.vehicles.find(el => el.payed === true)) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        let index = this.vehicles.findIndex(el => el.carNumber === carNumber);
        this.vehicles[index].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let newArr = this.vehicles
                .sort((a, b) => {
                    a.carModel.localeCompare(b.carModel);
                })
                .map(el => `${el.carModel} == ${el.carNumber} - ${el.payed ? "Has payed" : "Not payed"}`);
            let result = [`The Parking Lot has ${this.capacity} empty spots left.`];
            newArr.forEach(el => result.push(el));
            return result.join('\n');
        } else {
            let index = this.vehicles.findIndex(el => el.carNumber === carNumber);
            return `${this.vehicles[index].carModel} == ${carNumber} - ${this.vehicles[index].payed ? "Has payed" : "Not payed"}`;

        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
