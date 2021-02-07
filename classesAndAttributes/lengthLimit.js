class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(num) {
        this.innerLength += num;
    }

    decrease(num) {
        this.innerLength -= num;
        this.innerLength < 0 ? this.innerLength = 0 : this.innerLength;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...'
        } else if (this.innerLength === 0) {
            return '...'
        } else if (this.innerString.length <= this.innerLength) {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
