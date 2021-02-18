class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.workload = 0;
        this.profit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        let found = this.clients.find(obj => obj[ownerName]);
        let found2 = undefined;
        if (this.workload >= 100) {
            throw Error("Sorry, we are not able to accept more patients!");
        } else if (found) {
            found2 = found[ownerName].find(obj1 => obj1.petName === petName);
            if (found2 && found2.procedures.length > 0) {
                throw Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${found2.procedures.join(', ')}.`);
            }
        }

        if (found === undefined) {
            this.clients.push({
                [ownerName]: [{ petName, kind, procedures }]
            });
        } else if (found2 === undefined) {
            found[ownerName].push({ petName, kind, procedures });
        } else if (found2.procedures.length === 0) {
            found2.procedures = procedures;
        }

        this.clients.sort((a, b) => {
            let criteriaA = Object.keys(a)[0];
            let criteriaB = Object.keys(b)[0];
            return criteriaA.localeCompare(criteriaB);
        });

        this.clients.forEach(obj => {
            let eachGuy = Object.values(obj);
            let [eachGuyPets] = eachGuy;
            eachGuyPets.sort((a, b) => a.petName.localeCompare(b.petName));
        });

        this.clinicWorkload();
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let found = this.clients.find(obj => obj[ownerName]);
        let found2 = undefined;

        if (found === undefined) {
            throw Error("Sorry, there is no such client!");
        } else {
            found2 = found[ownerName].find(obj1 => obj1.petName === petName);
            if (found2 === undefined) {
                throw Error(`Sorry, there are no procedures for ${petName}!`);
            } else {
                if (found2.procedures.length === 0) {
                    throw Error(`Sorry, there are no procedures for ${petName}!`);
                }
            }
        }

        let bill = found2.procedures.length * 500;
        this.profit += bill;
        found2.procedures.length = 0;
        this.clinicWorkload();
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let result = [];
        result.push(`${this.clinicName} is ${Math.floor(this.workload)}% busy today!`);
        result.push(`Total profit: ${this.profit.toFixed(2)}$`);

        this.clients.forEach(el => result.push(`${Object.keys(el)[0]} with:\n${Object.values(el)
            .reduce((acc, current) => {
                current.forEach(y => {
                    acc.push(`---${y.petName} - a ${y.kind.toLowerCase()} that needs: ${y.procedures.join(', ')}`);
                })
                return acc;
            }, [])
            .join('\n')}`));

        return result.join('\n');
    }

    clinicWorkload() {
        let activeClients = this.clients.map(obj => {
            let currentClient = Object.values(obj);
            let pet = currentClient.map(obj1 => obj1.filter(el => el.procedures.length > 0));
            return pet;
        });
        let accepted = 0;
        activeClients.forEach(el => el.forEach(el1 => accepted += el1.length));
        this.workload = accepted * 100 / this.capacity;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 3);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B', 'SK456']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny',));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B', 'SK456']));

console.log(clinic.toString());
