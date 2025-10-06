// Module 3 Fundamentals


// console.log('hello'); console.log('world');

// console.log('hello')
// console.log('world')

// console.log('world') // this comment follows the statement, will be ignored when compiled

// // A comment line

// /* code block comment
// function printConsoleMessage() {
// console.log('I am commented out')
// }
// */

// const integer = 123 // integer - whole number
// const float = 12.345 // floating point - decimal number

// // console.log(1/0) // division by zero = Infinity
// // console.log(-1/0) // negative division by zero = -Infinity
// console.log("not a number" / 1) // invalid mathematical operation = NaN

// let one = 1
// let two = 2
// let three = 3

// console.log(one + two - three * two / one)

// const bigint_valid = 1234567890123456789012345n;
// const bigint_invalid = 1234567890123456789012345; // too large for standard integers
// console.log(bigint_valid == bigint_invalid) // false

// let isChecked = false
// let isToggleOn = true

// let CarOn = true
// let CarIdle = false

// CarOn = !CarOn
// console.log(CarOn) // false

// // isChecked = !isChecked

// // console.log(isChecked) // true

// let location

// console.log(location) // undefined

// let location2 = null

// let age = undefined
// console.log(`${location2} == ${age} ? ${location2 == age}`)

// console.log(`${location2} === ${age} ? ${location2 === age}`)

// const tv = { // object starts here
//   brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
//   size: "55-inch", // values can be any data type
//   model: 2025, // multiple key-value pairs are separated by commas
//   resolution: "4K UHD" // the comma on the last key-value pair can be omitted
// } // object ends here. All data is stored in tv variable.

// console.log(tv)
// console.log(tv.brand)
// console.log(tv.resolution)

// console.log(typeof undefined) // undefined
// console.log(typeof 0) // number
// console.log(typeof 10n) // bigint
// console.log(typeof true) // boolean
// console.log(typeof 'text') // string
// console.log(typeof Symbol('id')) // symbol
// console.log(typeof Math); // object
// console.log(typeof null); // object
// console.log(typeof console.log); // function

// console.log( String(false)) // false - string form of boolean

// console.log( "1" + 2 +3) // 123 - string '1' is concatenated with numbers 2 and 3

// console.log( 1 + 2 + "3") // 33 - numbers 1 and 2 are added, then concatenated with string '3'

// console.log( Number("   4   ")) // 4 - trims spaces and converts to number
// console.log( Number(null)) // 0 - intentionally empty value converts to 0
// console.log( Number(undefined)) // NaN - non-existent value is unknown number
// console.log( Number(false)) // 0 - boolean false converts to 0
// console.log( Number(true)) // 1 - true converts to 1
// console.log( Number("")) // 0 - empty string converts to 0
// console.log( Number("not a number")) // NaN - non-empty strings beginning with chars cannot convert

// console.log("6" / "2") // 3 - division converts strings to numbers
// console.log("6" * "2") // 12 - multiplication converts strings to numbers
// console.log("6" - "2") // 4 - subtraction converts strings to numbers
// console.log(+"6") // 6 - unary plus converts string to number
// console.log("6" + "2") // 62 - addition concatenates strings

// console.log( Boolean("")) // false - empty string is false
// console.log( Boolean(0)) // false - 0 is false
// console.log( Boolean(null)) // false - null is false
// console.log( Boolean(undefined)) // false - undefined is false
// console.log( Boolean(NaN)) // false - NaN is false
// console.log( Boolean("false")) // true - non-empty string is true
// console.log( Boolean(-1)) // true - non-zero number is true
// console.log( Boolean(" ")) // true - string with space is true
// console.log( Boolean("hello")) // true - non-empty string is true

// console.log( NaN ? 'NaN is true' : 'NaN is false') // NaN is false
// console.log( 0 ? '0 is true' : '0 is false') // 0 is false
// console.log( "hello" ? '"hello" is true' : '"hello" is false') // "hello" is true

// console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
// console.log( !!"" ) // false - double negation converts value to boolean then negate/toggle twice
// console.log( !!"non-empty" ) // true - double negation converts value to boolean then negate/toggle twice

// console.log('apple' < 'banana'); // true - 'apple' comes before 'banana' in lexicographical order
// console.log('eat' < 'eaten'); // true - 'eat' is shorter than 'eaten' but identical in the first 3 characters

// console.log("2" > 1) // true - converts to 2 > 1
// console.log("2" != 1) // true - converts to 2 is not equal to 1
// console.log("02" == 2) // true - converts to 2 == 2
// console.log(true == 1) // true - true converts to 1
// console.log(false == 0) // true - false converts to 0
// console.log(null == undefined) // true - both convert to 0

// // 'function' keyword followed by the custom function name, then ()
// function helloWorld() // we can include parameters inside the () as function variables
// { // function body is enclosed with curly brackets (braces)
//     console.log('hello world'); // can be one or multiple statements inside the function
// }

// helloWorld(); // once the function is defined, we need to call it to make it run/execute

// function checkAge(age) { // "checkAge" can be anything
//     if (age > 18) {
//         return 'adult'
//     }
//     return 'non-adult' // "otherwise"
// }

// console.log(checkAge(21)) // adult
// console.log(checkAge(16)) // non-adult

// const sayHi = function() { // function expression syntax for creating a function
//     console.log('Hi')
// }

// sayHi()

// sayHiExpression(); // error - cannot access before initilization
// sayHiDeclaration(); // works - can be hoisted

// const sayHiExpression = function() {
//     console.log('Hi');
// }

// function sayHiDeclaration() {
//     console.log('Hi');
// }

// sayHiExpression()

// const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concise
// sayHiArrow()

// const subtract1 = (a, b) => a - b; // most concise version of the below
// const subtract2 = (a, b) => { return a - b }; // does the same thing as above

// console.log(subtract1(10, 5)) // 5
// console.log(subtract2(10, 2)) // 8

// const sayHiExpression = function() {
//     console.log('Hi');
//     console.log(arguments);
// }

// function sayHiDeclaration() {
//     console.log('Hi');
//     console.log(arguments);
// }

// const sayHiArrow = () => {
//     console.log('Hi');
//     console.log(arguments);
// }

// sayHiDeclaration() // [Arguments] {}
// sayHiExpression() // [Arguments] {}
// // sayHiArrow() // ReferenceError: arguments is not defined

// const user = new Object(); // creates a new empty object

// const user1 = {}; // creates a new empty object

// const user3 = { // user objected contained within curly braces
//     name: 'joe', // string property with key 'name' and value 'joe'
//     age: 20, // numeric property with key 'age' and value 20
//     'has a dog': true // multi-word property key 'has a dog' with boolean value true
// };

// console.log(user3)
// console.log(user3.name)
// console.log(user3['has a dog'])

// let dogOwner = user3['has a dog']; // get value of property 'has a dog' and assign to new variable
// user3.age = 21; // set (or assign) new value to object property called age

// user3.location = 'USA'; // create new object property called location and set (assign) a value
// delete user3.location; // delete property of user object called location

// console.log(dogOwner)
// console.log(user3)

// const phone = {
//     model: 'iPhone 17',
//     color: 'black',
//     storage: 256
// }

// if (phone.color) console.log(`My ${phone.model} is ${phone.color}`) // prints message
// if (phone.storage) { //undefined counts as false, so the below won't print (before storage added)
//     console.log(`My ${phone.model} has ${phone.storage}GB`)
// }

// let goal = 5;
// for (let i = 0; i < goal; i++) { // wouldn't run at i = 5 or higher because i would no longer be less than goal (5)
//     console.log(`Iteration ${i} of ${goal}`)
// }

// const phone = {
//     model: 'iPhone 17',
//     color: 'black',
//     storage: 256
// }

// for (let key in phone) { //iterates over each property in the phone object, stores in 'key' variable
//     console.log('key: ' + key); // prints each object property name (key) in turn
//     console.log('value: ' + phone[key]); // prints each object value in turn
//     }

    // let person1 = { name: 'Anna' }; // object - stored by reference
    // let person2 = person1; // person2 points to same memory location as person1
    // person1.name = 'Brian';
    // console.log(person2.name); // Brian, even though we changed person1.name
    // let person3 = 'Carly'; // string - stored by value
    // let person4 = person3; // person4 points to separate memory location than person3, but both store same value
    // person3 = 'David';
    // console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values

    // const user = { name: 'Elliot', age: 27 };

    // const userClone = {}; // empty object, refers to different memory location
    // const userClone2 = {};

    // for (let key in user) { // iterate over user properties
    //     userClone[key] = user[key]; // re-create them in userClone
    //     userClone2[key] = user [key];
    //     }

    //     console.log(userClone); // { name: 'Elliot', age: 27 }

    //     // ^ old method of doing it

// console.log(user)

//     const userClone = {...user}; // spread or unpack user properties into new object
// console.log(userClone); // { name: 'Elliot', age: 27 }

// const userClone2 = {...user, age: 28, location: 'New Zealand'};
// console.log(userClone2); // { name: 'Elliot', age: 28, location: New Zealand' }

// const vehicle = { make: 'Toyota', model: 'Camry'};
// const mergedUser = {...user, ...vehicle};
// console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry'}

// // ^ newer way of doing it

// const box1 = {
//     weight: '20kg',
//     dimensions: { // nested object property
//         width: '30cm',
//         height: '10cm'
//     }
// }
// const box2 = {...box1}; // shallow clone
// box1.dimensions.height = '12cm'; // change box1 nested object property
// console.log(box2); // box2 references box1 dimensions and picks up height change

// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() { // method of user object
//         console.log('Roads go ever ever on');
//     },
//     sing2() { // shorthand method syntax, does same as above
//         console.log('Over rock and under tree');
//     }
// }
// user.sing(); // Roads go ever ever on
// user.sing2(); // Over rock and under tree

// const user = {
//     name: 'Bilbo Baggins',
//     age: 30,
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`) // 'this' is the current object
//     }
// }
// // 'user' is before the dot, prvodies the context where 'this' comes from
// user.printGreeting(); // Hello, I'm Bilbo Baggins and I'm 30 years old

// const user = {
//     name: 'Bilbo Baggins',
//     printThis() {
//         console.log(this); // 'this' is the current object
//         return this; // if we return it, we can 'chain' object methods together
//     },
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
//     }
// }
// user.printThis().printGreeting(); // methods chains together, works because printThis returns this

// function User(first,last) { // constructor function
//     this.first = first;
//     this.last = last;
//     this.hasShortName = () => this.first.length <= 3;
// }

// // we can create multiple users with different names
// let user1 = new User('Tim', 'Smith'); // need to use 'new'
// console.log(user1); // User { first: 'Tim', last: 'Smith' }
// console.log(user1.hasShortName()); // true

class User {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    hasShortName() {
        return this.first.length >= 3
    }
}

let user2 = new User('Tina', 'Smith') // need to use 'new'
console.log(user2) // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()) // false