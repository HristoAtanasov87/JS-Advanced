function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const inputRef = document.querySelector('#inputs>textarea');
    const outputBestRestaurant = document.querySelector('#bestRestaurant>p');
    const outputBestWorkers = document.querySelector('#workers>p');

    function onClick() {
        const input = JSON.parse(inputRef.value);

        let allRestaurants = {};

        for (let el of input) {
            let [name, employees] = el.split(' - ');
            let employeesArr = employees.split(', ');

            if (!allRestaurants.hasOwnProperty(name)) {
                allRestaurants[name] = {
                    workers: [],
                    avgSalary: 0,
                };
            }

            for (let i of employeesArr) {
                let [workerName, salary] = i.split(' ');
                salary = Number(salary);

                allRestaurants[name].avgSalary += salary;

                allRestaurants[name].workers.push({
                    'workerName': workerName,
                    'salary': salary
                });
                allRestaurants[name].workers.sort((a, b) => b.salary - a.salary);
            }
        }



        let bestAvgSalary = 0;
        let bestName = '';
        let bestSalary = 0;
        let bestWorkers;
        for (let restaurant in allRestaurants) {
            allRestaurants[restaurant].avgSalary = allRestaurants[restaurant].avgSalary / allRestaurants[restaurant].workers.length;

            if (allRestaurants[restaurant].avgSalary > bestAvgSalary) {
                bestAvgSalary = allRestaurants[restaurant].avgSalary;
                bestName = restaurant;
                bestSalary = allRestaurants[restaurant].workers[0].salary;
                bestWorkers = allRestaurants[restaurant].workers;
            }
        }

        outputBestRestaurant.textContent = `Name: ${bestName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

        let workersOutput = [];
        for (let el of bestWorkers) {
            workersOutput.push(`Name: ${el.workerName} With Salary: ${el.salary}`);
        }
        outputBestWorkers.textContent = workersOutput.join(' ');

    }
}