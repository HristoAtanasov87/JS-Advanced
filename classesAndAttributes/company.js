class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username) {
            throw new Error('Invalid input!');
        }
        if (!salary || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!position) {
            throw new Error('Invalid input!');
        }
        if (!department) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ username, salary, position });

        return (`New employee is hired. Name: ${username}. Position: ${position}`);
    }

    bestDepartment() {
        let best = '';
        let bestSalary = Number.MIN_SAFE_INTEGER;
        let bestEmployees;

        for (let eachDepartment of Object.entries(this.departments)) {
            let avgSalary = eachDepartment[1].reduce((acc, current) => {
                acc += current.salary;
                return acc
            }, 0) / eachDepartment[1].length;

            if (avgSalary > bestSalary) {
                bestSalary = avgSalary;
                best = eachDepartment[0];
                bestEmployees = eachDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            }
        }

        let toPrint = bestEmployees.map(el => `${el.username} ${el.salary} ${el.position}`);
        return `Best Department is: ${best}\nAverage salary: ${bestSalary.toFixed(2)}\n${toPrint.join('\n')}`;
    }
}

let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");

c.addEmployee("aaaa", 2000, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 2000, "HR", "Human resources");

console.log(c.bestDepartment());
