// References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// Primitives
let firstName = 'Marcin'; // string literal
let lastName = 'Kwiatkowski';
console.log(`${firstName} ${lastName}`);

let age = 30; // number literal
let isApproved = true;  // boolean literal
let undefinedVariable = undefined; // undefined

const interestRate = 0.3; // constant variable

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors.push(1); // add element to the end of the array, may be varied type
console.log(selectedColors);
console.log("Selected colors contain different types: " + selectedColors[0] + " " + selectedColors[1] + " " + selectedColors[2]);

// Objects
let person = {
    name: 'Marcin',
    age: 30
};
console.log(person.name + ' ' + person.age); // dot notation
console.log(person['name']); // bracket notation, used when we don't know the name of the property now, but we will know it in runtime

// Functions
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet('Marcin', 'Kwiatkowski');

function square(number) {
    return number * number;  // return statement is used to return the result of the function
}
console.log('The result of square(2) is: ' + square(2));

// typeof operator
console.log(typeof firstName); // string

// Operators
let x = 10;
let y = 3;
console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulo
console.log(x ** y); // x powered to y

// Increment and decrement
console.log(x); // 10
console.log(++x); // increment before. Log 11
console.log(x++); // increment after. Log 11, it is after incremented to 12
console.log(--x); // decrement before, Log 11 as it was 12
console.log(x--); // decrement after, Log 11, after logging it will be decremented to 10
console.log(x); // 10

// Assignment operators
x = x + 5; // x += 5
x += 5;
console.log(x);
x -= 10;
x *= 2;
console.log(x); // 10

// Comparison operators
x = 10;
console.log(x > 0); // true
console.log(x >= 10); // true
console.log(x === 0); // false, it is strict equality operator, it checks if the value and type are the same
console.log(x !== 0); // true
console.log(x === '10'); // false, as the type is different
console.log(x == '10'); // true, as the type is not checked. So called loose equality operator

// Ternary operator
let points = 110;
let customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);

// Logical operators
console.log(true && true); // true
console.log(true || false); // true
console.log(!true); // false

// Logical operators with non-boolean values
let userColor = 'red';
let defaultColor = 'blue';
console.log(userColor || defaultColor); // red, as userColor is truthy

userColor = undefined;
console.log(userColor || defaultColor); // blue, as userColor is falsy

// Bitwise operators
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); // Bitwise OR => 3
console.log(1 & 2); // Bitwise AND => 0

// Read, Write, Execute
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // 6

let message = (myPermission & readPermission) ? "yes" : "no";
console.log(message); // yes

// Swapping variables
let a = 'red';
let b = 'blue';
[a, b] = [b, a];
console.log(a);
console.log(b);

// if, if else, else
let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
}
else
{
    console.log('Good evening')
}

// switch statement
let role = 'moderator'

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// For loop
for (let i=0; i<10; i++) {
    console.log('Hello World ' + i);
}

// while loop with break and continue
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) break;
    else if (i === 2) {
        i++;
        continue; // skip the rest of the code in the loop and go to the next iteration
    }
    console.log('Hello World from while loop ' + i);
}

// do while loop
let j = 0;
do {
    console.log('Hello World from do while loop ' + j);
    j++;
} while (j < 5);

// for in loop
const person2 = {
    name: 'Marcin',
    age: 30
};

for (let key in person2) {
    console.log(key, person2[key]);  // bracket notation
}

const colors = ['red', 'green', 'blue'];
for(let index in colors) {
    console.log(index, colors[index]); // bracket notation
}

// for of loop (iterating over arrays)
for (let color of colors) {
    console.log(color);
}

// Built-in functions
let maxNumber = Math.max(1, 10, 3, 4, 5);
console.log(maxNumber);

// Exercise
// Divisable by 3 => Fizz
// Divisable by 5 => Buzz
// Divisable by 3 and 5 => FizzBuzz
// Not divisable by 3 or 5 => input
// Not a number => 'Not a number'
let output = fizzBuzz(10);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;  // not a number
    }

    if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
    else if (input % 3 !== 0 && input % 5 !== 0) return input;
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
}
console.log(output);

// Objects part 2
let circle = {
    radius: 2,
    location: {
        x: 3,
        y: 4
    },
    isVisible: true,
    inspect: function() {
        console.log('Radius: ' + this.radius, this.location.x, this.location.y, this.isVisible);
    }
};

circle.inspect();

// Objects declared with const keyword
const circleConst = {
    radius: 2,
    location: {
        x: 3,
        y: 4
    }
};

circleConst.radius = 3; // this is allowed, as we are not changing the reference to the object, but the object itself
console.log(`circleConst.radius = ${circleConst.radius}`);

// circleConst = {}; // this is not allowed, as we are changing the reference to the object


// Factory functions
function createCircle(radius) {
    return {
        radius, // equivalent to radius: radius
        draw() {  // equivalent to draw: function() {}
            console.log('Draw');
        }
    };
}

console.log(createCircle(1));

// Constructor functions
function Circle(radius) {  // Constructor function should start with a capital letter
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const circle1 = new Circle(1);
console.log(circle1);

// Class declaration is the preffered way to create objects
class CircleClassDeclaration {
    constructor(radius) {
        this.radius = radius;
    }

    draw = function() {
        console.log('Draw from CircleClassDeclaration');
    }
}

let circleClassDeclaration = new CircleClassDeclaration(1);
console.log(circleClassDeclaration.draw());

// Dynamic nature of objects
const circle2 = {
    radius: 1
};
circle2.color = 'yellow';   // add new property to the object
circle2.draw = function() {  // add new method to the object
    console.log('Draw ' + this.color);
};

delete circle2.color;  // delete property from the object
delete circle2.draw;  // delete method from the object
console.log(`Circle 2: ${circle2}`);

// Functions are objects
const personJohn = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(address) {
        return this.firstName + " " + this.lastName + " " + address;
    }
};

const personJoe = {
    firstName: "Joe",
    lastName: "Smith"
};

console.log(personJohn.fullName.call(personJoe, 'New York')); // call method

//--------------------------------------------------------------------------------------------

const calc = {
    addThis: 100000,
    sum: function(...arr) { // rest operator
        let sumTotal = this.addThis;
        for (let i = 0; i < arr.length; i++) {
            sumTotal += arr[i];
        }
        return sumTotal;
    }
};

console.log(calc.sum.apply({addThis: 200000}, [1, 2, 3, 4, 5]));

// Value vs reference types
// Primitives are boolean, number, string, symbol, undefined, null
// Objects are objects, functions, arrays - they are reference types

// Enumerating properties of an object
const circle3 = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

for (let key in circle3) {  // for in used with objects
    console.log(key, circle3[key]);
}

for (let key of Object.keys(circle3)) {  // for of used with iterables
    console.log(key);
}

for (let entry of Object.entries(circle3)) {
    console.log(entry); // array of key value pairs
}

if ('radius' in circle3) {
    console.log('Circle has a radius');
}

if ('color' in circle3) {
    console.log('Circle has a color');  // this will not be printed
}

// Copying objects
const circle4 = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

const another = {};
for (let key in circle4) {
    another[key] = circle4[key];
}

const another2 = Object.assign({}, circle4);  // another way to copy objects
const another3 = {...circle4};  // another way to copy objects
const another4 = JSON.parse(JSON.stringify(circle4));  // another way to copy objects
const another5 = Object.assign({ color: "yellow" }, circle4);  // another way to copy objects (extend existing objects)
console.log(`${another5}`);
// Using spread operator to copy objects
const another6 = {...circle4, color: "yellow"};  // another way to copy objects (extend existing objects)

// Garbage collection

// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let numbers = [1, 2, 3, 4, 5];
let maxNumber1 = Math.max(...numbers); // spread operator
console.log(maxNumber1);

// Template literals
const someName = 'Marcin';
const templateLiteral = `Hi ${someName} This is a
template literal`;
console.log(templateLiteral);

// Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Predicate functions
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]

const course1 = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course1);

const course2 = courses.findIndex(course => course.name === 'b');
console.log(course2);

// Spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(`Combined array: ${combined}`);

// copy array
const copy = [...combined];

// iterating over an array
const numbersArray = [1, 2, 3];
for (let number of numbersArray) {
    console.log(number);
}

// iterating using forEach with arrow function
numbersArray.forEach(number => console.log(number));
numbersArray.forEach((number, index) => console.log(index, number));

// joining arrays
console.log(numbersArray.join(','));

// spitting strings into arrays
const msg = "This is my message";
const parts = message.split(' ');
console.log(parts);

// sorting Arrays
const numbersToSort = [2, 3, 1];
console.log(numbersToSort.sort());

const namesArray = [{id: 1, name: 'marcin'}, {id: 3, name: 'Joe'}, {id: 0, name: 'Adam'}];
namesArray.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(namesArray);

// Testing elements of an array
const numbersToTest = [1, 2, 3, -1];

const allPositive = numbersToTest.every(v => v >= 0);
console.log(allPositive);

const filtered = numbersToTest.filter(v => v >= 0);
console.log(filtered);

// Mapping an array
const htmlFromMapValuesArr = filtered.map(n => '<li>' + n + '</li>');
const htmlString = htmlFromMapValuesArr.join('\n');
console.log(htmlString);

const objectsArray = filtered.map(n => new Object({value: n}));
console.log(objectsArray);

// chaining methods
const numbersToChain = [1, -1, 2, 3];
const outputChain = numbersToChain.filter(n => n >= 0).map(n => ({value: n})).filter(obj => obj.value > 1);
console.log(outputChain);

// Reducing an array
const numbersToReduce = [1, -1, 2, 3];
const sumOfNumbers = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfNumbers);

// Functions
// Anonymous functions
let doSomething = function() { console.log('Do something'); };
doSomething();

// Hoisting is the process of moving function declarations to the top of the file in runtime
// Function declarations are hoisted, function expressions are not hoisted

// Function arguments
function sumArguments() {
    let total = 0;
    for (let value of arguments) {  // arguments is an array-like object
        total += value;
    }
    return total;
}

console.log(sumArguments(1, 2, 3));

// Rest operator
function sumRest(...args) {
    return args.reduce((acc, currentValue) => acc + currentValue);
}
console.log(sumRest(1, 2, 3, 4, 5));

// Default parameters
// Using truthy operator
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

// Better option is to use default parameters
function interest1(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

// Getters and setters
let personObject = {
    firstName: 'Marcin',
    lastName: 'Kwiatkowski',
    get fullName() {
        return `${personObject.firstName} ${personObject.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Error handling: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
personObject = {
    firstName: 'Marcin',
    lastName: 'Kwiatkowski',
    // This is annotation for the linter
    /**
     * @param {string} value
     */
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');
        }
        if (value.split(' ').length !== 2) {
            throw new Error('Enter a first and last name');
        }
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    personObject.fullName = '';
}
catch (e) {
    console.log(e);
}

// Let vs var
// Let is block scoped, var is function scoped. Let is the preferred way to declare variables.
// When using var, the variable is hoisted to the top of the function, when using let, the variable is hoisted to the top of the block.
// When using var in a main block, the variable is hoisted to the top of the file and it can overwrite the window object variable.

// The this keyword
// In a method, this refers to the object that is executing the current function
// In a function, this refers to the global object (window in a browser, global in Node.js)
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);  // this is used to pass the reference to the video object. Otherwise this would refer to the global object (window)
    }
};

// If this cannot be passed as an argument, it can be stored in a variable
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

// Using call, apply or bind to set the value of this
function playVideo(a, b) {
    console.log(this);
}

playVideo(1, 2) // => this refers to the global object
playVideo.call({name: 'Marcin'}, 1, 2); // => this refers to the object passed as the first argument
playVideo.apply({name: 'Marcin'}, [1, 2]); // => this refers to the object passed as the first argument
playVideo.bind({name: 'Marcin'})(1, 2); // => this refers to the object passed as the first argument

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }).bind(this);  // bind returns a new function, so video3 is in its scope
    }
};

// And using arrow functions
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);   // this refers to the video object as it is an arrow function
        });
    }
};

// Classes
class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('Draw');
    }
}

// Static methods
class Math2 {
    static abs(value) {
        return value >= 0 ? value : -value;
    }
}

// Inheritance
class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('Move');
    }
}

class CircleClassInheritance extends Shape {
    constructor(radius, color) {
        super(color);   // Calling the constructor of the base class
        this.radius = radius;
    }

    draw() {
        console.log('Draw');
    }
}

// Private members using symbols
class Rectangle {
    #height = 0;  // private field
    #width = 0;  // private field

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }
}

// Generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

for (let value of generatorFunction()) {
    console.log(value);
}