class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointObjOne, pointObjTwo) {
        return Math.sqrt(Math.pow(pointObjOne.x - pointObjTwo.x, 2) + Math.pow(pointObjOne.y - pointObjTwo.y, 2));
    }
}

let p1 = new Point(5, 5); // pointObjOne
let p2 = new Point(9, 8); // pointObjTwo
console.log(Point.distance(p1, p2));
