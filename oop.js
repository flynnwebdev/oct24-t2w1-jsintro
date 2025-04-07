// Object literal
const person = {
    name: 'John',
    age: 34
}

// Python: type(x)
// console.log(typeof person)

// Python class
// class Person:
//    def __init__(self, name, age):
//        self.name = name
//        self.age = age
//
// p1 = Person('John', 35)

// Constructor function
// function Person(name, age) {
//     // Copy param values into object properties
//     this.name = name
//     this.age = age
// }
// // Attach greet method to the prototype
// Person.prototype.greet = function () {
//     console.log(`${this.name} is ${this.age} years old.`)
// }

// Syntactic sugar
class Person {
    constructor(name, age) {
        // Copy param values into object properties
        this.name = name
        this.age = age
    }  

    greet() {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

const p1 = new Person('Matt', 52)
const p2 = new Person('Kate', 59)
// p1.greet()
// p2.greet()
// console.log(p1)
// console.log(p2)


class Rectangle {
    constructor(width, height) {
        // do some stuff
        console.log('Rectangle constructor ...')
        this._width = width
        this.height = height
        // do some other stuff
    }

    get width() {
        return this._width
    }

    set width(value) {
        // Check auth
        // Validate value
        this._width = value
    }

    get area() {
        // Check auth
        // if (auth) {
        return this.width * this.height
        // else { raise an exception }
    }
}

// const r1 = new Rectangle(10, 20)
// r1.width = 5
// console.log(r1.area)


// Inheritance
// Python:
// class Square(Rectangle):

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
        // do extra stuff for Square
    }
}

const s1 = new Square(10)
console.log(s1)
console.log(s1.area)
