class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        return this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`); // calls the getter diameter
console.log(`Area: ${c.area}`); // calls the getter area
c.diameter = 1.6; // calls the setter diameter
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`); // calls the getter diameter with the new value of the radius
console.log(`Area: ${c.area}`); //calls the getter area with the new value of the radius
