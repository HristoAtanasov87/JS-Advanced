function solve() {
    const proto = {};
    const myObj = Object.create(proto);
    myObj.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                myObj[key] = value;
            }
        })
    }

    return myObj;

}