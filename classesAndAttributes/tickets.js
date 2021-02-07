function solve(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortFunction = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status),

    };

    function inputProcess(el) {
        return el.split('|');
    }

    return array
        .map(inputProcess)
        .reduce((output, current) => {
            let [destination, price, status] = current;
            price = Number(price);
            output.push(new Ticket(destination, price, status));
            return output
        }, [])
        .sort(sortFunction[criteria]);

}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
)