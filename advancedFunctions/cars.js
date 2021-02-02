function solve(input) {
    let result = {};

    input.forEach(el => {
        let [action, name, ...others] = el.split(' ');

        if (others.includes('inherit')) {
            inherit(name, others[1]);
        } else if (others.includes('set')) {
            set(name, others[0], others[1]);
        } else if (action === 'print') {
            print(name);
        } else if (action === 'create') {
            create(name);
        }

    });


    function create(objName) {
        result[objName] = {};
    }
    function inherit(name, toInherit) {
        result[toInherit][name] = {};
    }
    function set(name, key, value) {

    }
    function print() {

    }
}