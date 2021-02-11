function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.email = email;
            this.name = name;
        }

        toString() {
            let str = [];
            for (let key in this) {
                if (this.hasOwnProperty(key)) {
                    str.push(`${key}: ${this[key]}`);
                }
            }
            return `${this.constructor.name} (${str.join(', ')})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString();
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return super.toString();
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personAndTeacher();

const Student = classes.Student;
let s = new Student('az', 'ammama', 'math');
// console.log(s);
console.log(s.toString());