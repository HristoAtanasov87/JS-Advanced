function solve() {
    const TASKS = {
        JUNIOR: ['is working on a simple task.'],
        SENIOR: ['is working on a complicated task.', 'is taking time off work.', 'is supervising junior workers.'],
        MANAGER: ['scheduled a meeting.', 'is preparing a quarterly report.']
    };

    class Employee {
        constructor(name, age, tasks) {
            // if (new.target === Employee) {
            //     throw new Error('Cannot instantiate directly.');
            // }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name} ${currentTask}`);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.JUNIOR);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.SENIOR);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, TASKS.MANAGER);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}