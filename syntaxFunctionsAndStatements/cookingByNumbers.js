function solve(num, com1, com2, com3, com4, com5) {
    num = Number(num);
    const actions = [com1, com2, com3, com4, com5];

    for (let i of actions) {
        switch (i) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num = num + 1;
                console.log(num);
                break;
            case "bake":
                num = num * 3;
                console.log(num);
                break;
            case "fillet":
                num = num - num * 0.2;
                console.log(num);
                break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');