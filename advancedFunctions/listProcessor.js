function solve(input) {
    let innerCollection = [];

    input.forEach(el => {
        let [action, word] = el.split(' ');
        toDo = commands();
        toDo[action](word);
    })

    function commands() {
        return {
            add,
            remove,
            print
        }

        function add(str) {
            innerCollection.push(str);
        }

        function remove(str) {
            while (innerCollection.includes(str)) {
                innerCollection.splice(innerCollection.indexOf(str), 1);
            }
        }

        function print(array) {
            console.log(innerCollection.join(','));
        }
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);