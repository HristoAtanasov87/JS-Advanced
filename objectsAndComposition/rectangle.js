function rectangle(width, height, color) {
    let result = {
        width,
        height,
        color: color.split('').map((el, index) => index == 0 ? el.toUpperCase() : el).join(''),
        calcArea: function () {
            return this.width * this.height;
        }
    }

    return result;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
