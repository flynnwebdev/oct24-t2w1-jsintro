a = 5 // global
console.log(a)

var b = 6  // function scope
console.log(b)

let c = 7 // block scope
console.log(c)

const d = 8
// d = 10
console.log(d)

// Input and output
// let value = prompt('What is your name?')

// Template string (like a Python f-string)
// print(f"Your name is {name}")
// console.log(`Your name is ${value}`)

// Data Types

// Boolean
true
false

// Falsy values
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(NaN)) // Not A Number
console.log(Boolean(null)) // None in Python
console.log(Boolean(undefined))

// Typecast
// int(2.5)

// Truthy values
console.log(Boolean(12))
console.log(Boolean('Hi'))
console.log(Boolean({}))

// Number
// type(2.5) # returns float
console.log(typeof('Hi'))
console.log(typeof(2))
console.log(typeof('Hi'))

console.log(1/2)
console.log(1/"2") // Type coercion
console.log(1/0)
console.log(1/"hi")

// Explicit cast
x = "2"
console.log(1/Number(x))

// Array (list in Python)
const names = ['John', 'Jane', 'Bob']
const foo = ['Matt', 52, 184.5]
console.log(names[1])
names.push('Mary', 'Jason')
console.log(names)
const name = names.pop()
console.log(names)
// Python naming convention is snake case - big_array
const bigArray = names.concat(foo)  // Camel case
console.log(bigArray)
console.log(names)

// Objects - dict in Python
// Object literal
const person1 = {
    // Python: "name": "John"
    name: "John",
    age: 32,
    city: "Sydney"
}

console.log(person1.age)
// Object.freeze(person1)
person1.country = 'Australia'
// person1.city = 'Melbourne'
console.log(person1)

const person2 = {
    name: 'Sally',
    age: 45,
    address: {
        city: 'Melbourne',
        country: 'Australia'
    }
}

// const attr = prompt('Which attribute?')
// Optional chaining with ?
console.log(person1.address?.country)
