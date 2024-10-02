# Purpose
This file constitutes with examples on how to use JavaScript. It is kind of quick JavaScript reference.

# JavaScript reference
[JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Primitives
```JavaScript
let firstName = 'Marcin'; // string literal
let lastName = 'Kwiatkowski';
console.log(`${firstName} ${lastName}`);

let age = 30; // number literal
let isApproved = true;  // boolean literal
let undefinedVariable = undefined; // undefined

const interestRate = 0.3; // constant variable
```

## Arrays - basics
```JavaScript
let selectedColors = ['red', 'blue'];

selectedColors.push(1); // add element to the end of the array. Note arrays can contain different types
console.log(selectedColors); // => ['red', 'blue', 1]

```
### Referring to array elements by index
```JavaScript
console.log(selectedColors[0] + ' ' + selectedColors[1] + ' ' + selectedColors[2]);
```

## Objects
```JavaScript
let person = {
    name: 'Marcin',
    age: 30
};
console.log(person.name + ' ' + person.age); // dot notation
console.log(person['name']); // bracket notation, used when we don't know the name of the property now, but we will know it in runtime
```

## Functions basics
```JavaScript
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet('Marcin', 'Kwiatkowski');
```

```JavaScript
function square(number) {
    return number * number;  // return statement is used to return the result of the function
}
console.log('The result of square(2) is: ' + square(2));
```

## Typeof operator
```JavaScript
let firstName = 'Marcin Kwiatkowski';
console.log(typeof firstName); // => string
```

## Operators
```JavaScript
let x = 10;
let y = 3;
console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulo
console.log(x ** y); // x powered to y
```

### Increment and decrement
```JavaScript
let x = 10;

console.log(x); // 10
console.log(++x); // increment before. Output: 11
console.log(x++); // increment after. Output: 11. After it is incremented to 12
console.log(--x); // decrement before, Output 11, as it was 12
console.log(x--); // decrement after, Output 11. After this line x = 10
console.log(x); // 10
```

### Assignment operators
```JavaScript
let x = 0

x = x + 5;
x += 5;
console.log(x); // => 10

x -= 10;
x *= 2;
console.log(x); // => 0
```

### Comparison operators
```JavaScript
x = 10;

console.log(x > 0); // true
console.log(x >= 10); // true
console.log(x === 0); // false, it is strict equality operator, it checks if the value and type are the same
console.log(x !== 0); // true
console.log(x === '10'); // false, as the type is different
console.log(x == '10'); // true, as the type is not checked. So called loose equality operator
```

### Ternary operator
```JavaScript
let points = 110;

let customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType); // gold customer
```

### Logical operators
```JavaScript
console.log(true && true); // true
console.log(true || false); // true
console.log(!true); // false
```

### Logical operators with non-boolean values
```JavaScript
let userColor = 'red';
let defaultColor = 'blue';

console.log(userColor || defaultColor); // red, as userColor is truthy

userColor = undefined;
console.log(userColor || defaultColor); // blue, as userColor is falsy
```

### Bitwise operators
```JavaScript
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); // Bitwise OR => 3
console.log(1 & 2); // Bitwise AND => 0
```

Another example of usage:
```JavaScript
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
```

## Swapping variables
```JavaScript
let a = 'red';
let b = 'blue';
[a, b] = [b, a];
console.log(a);
console.log(b);
```

## Conditional statements
### if, else if, else
```JavaScript
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
```

### switch-case statement
```JavaScript
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
```

## Loops
### For loop
```JavaScript
for (let i=0; i<10; i++) {
    console.log('Hello World ' + i);
}
```

### While loop
```JavaScript
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
```

### Do-while loop
```JavaScript
let j = 0;
do {
    console.log('Hello World from do while loop ' + j);
    j++;
} while (j < 5);
```

### For-in loop
```JavaScript
const person2 = {
    name: 'Marcin',
    age: 30
};

// Iterating through object properties
for (let key in person2) {
    console.log(key, person2[key]);  // bracket notation to refer to a property
}
```
Another examples with array:
```JavaScript
const colors = ['red', 'green', 'blue'];
for(let index in colors) {  // For in returns indexes
    console.log(index, colors[index]); // bracket notation
}
```

### For-of loop (iterating over arrays)
```JavaScript
for (let color of colors) {
    console.log(color);
}
```

## Some built-in functions
```JavaScript
let maxNumber = Math.max(1, 10, 3, 4, 5);
console.log(maxNumber);
```
```JavaScript
// Check if a number is:
// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input param
// Not a number => 'Not a number'
let output = fizzBuzz(10);  // in runtime all functions are moved to the top of module, so we can call fizzBuzz from here

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
```

## Objects - more advanced exampes
```JavaScript
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
```

## Objects declared with const keyword
```JavaScript
const circleConst = {  // const means circleConst cannot be reassigned to another object
    radius: 2,
    location: {
        x: 3,
        y: 4
    }
};

circleConst.radius = 3; // this is allowed, as we are not changing the reference to the object, but the object itself
console.log(`circleConst.radius = ${circleConst.radius}`);

// circleConst = {}; // this is not allowed, as we are changing the reference to the object
```

### Factory functions - one way of creating objects
```JavaScript
function createCircle(radius) {
    return {
        radius, // equivalent to radius: radius
        draw() {  // equivalent to draw: function() {}
            console.log('Draw');
        }
    };
}

console.log(createCircle(1));
```

### Constructor functions - another way of creating objects
```JavaScript
function Circle(radius) {  // Constructor function, by convention, should start with a capital letter
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

const circle = new Circle(1);
console.log(circle);
```

### Class declaration - preferred way to create objects
```JavaScript
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
```

## Dynamic nature of objects
```JavaScript
const circle2 = {
    radius: 1
};

circle2.color = 'yellow';   // add new property to the object in runtime
circle2.draw = function() {  // add new method to the object in runtime
    console.log('Draw ' + this.color);
};

delete circle2.color;  // delete property from the object in runtime
delete circle2.draw;  // delete method from the object in runtime
console.log(`Circle 2: ${circle2}`);
```

## Functions as objects
```JavaScript
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

console.log(personJohn.fullName.call(personJoe, 'New York')); // call method, inject personJoe, so firstName and lastName will be initialized by personJoe properties.
```

Another example with apply function that takes object as first parameter and array of parameters:
```JavaScript
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

console.log(calc.sum.apply({addThis: 200000}, [1, 2, 3, 4, 5]));  // => 200015
```

## Value vs reference types
- Primitives are boolean, number, string, symbol, undefined, null. They are passed by values
- Objects are objects, functions, arrays - they are reference types, passed by reference

## Enumerating properties of an object
```JavaScript
const circle3 = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

for (let key in circle3) {  // for in used with objects
    console.log(key, circle3[key]);
}

for (let key of Object.keys(circle3)) {  // for of used with iterables objects, arrays
    console.log(key);
}

for (let entry of Object.entries(circle3)) {
    console.log(entry); // returns array of key value pairs
}

if ('radius' in circle3) {  // in operator
    console.log('Circle has a radius');
}

if ('color' in circle3) {
    console.log('Circle has a color');  // this will not be printed
}
```

## Copying objects
```JavaScript
const circle4 = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

// Not an elegant way for copying objects
const another = {};
for (let key in circle4) {
    another[key] = circle4[key];
}

const another2 = Object.assign({}, circle4);  // another way to copy objects
const another3 = {...circle4};  // another way to copy objects using spread operator
const another4 = JSON.parse(JSON.stringify(circle4));  // another way to copy objects
const another5 = Object.assign({ color: "yellow" }, circle4);  // another way to copy objects (extend existing objects with color property)
console.log(`${another5}`);

const another6 = {...circle4, color: "yellow"};  // another way to copy objects (extend existing objects) using spread operator
```

## Garbage collection
Do not need to destruct objects like in C, C++

## Build-in modules
[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Example of usage:
```JavaScript
let numbers = [1, 2, 3, 4, 5];
let maxNumber1 = Math.max(...numbers); // spread operator
console.log(maxNumber1);
```

## Template literals
```JavaScript
const someName = 'Marcin';
const templateLiteral = `Hi ${someName} This is a
template literal`;
console.log(templateLiteral);
```

## Predicate functions
```JavaScript
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
```

## Spread operator
```JavaScript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];  // concatenation of 2 arrays
console.log(`Combined array: ${combined}`);
```

## Arrays continued
### Copy of arrays
```JavaScript
const copy = [...combined];  // using spread operator
```

### Iterating over an array
```JavaScript
const numbersArray = [1, 2, 3];
for (let number of numbersArray) {  // note for-of loop is used
    console.log(number);
}
```

### Iterating using forEach with arrow function
```JavaScript
numbersArray.forEach(number => console.log(number));
numbersArray.forEach((number, index) => console.log(index, number));
```

### Joining arrays to string
```JavaScript
console.log(numbersArray.join(','));
```

### Spitting strings into arrays
```JavaScript
const msg = "This is my message";
const parts = message.split(' ');
console.log(parts);
```

### Sorting Arrays
```JavaScript
const numbersToSort = [2, 3, 1];
console.log(numbersToSort.sort());
```
Another example for sorting arrays of objects using predicates:
```JavaScript
const namesArray = [{id: 1, name: 'marcin'}, {id: 3, name: 'Joe'}, {id: 0, name: 'Adam'}];
namesArray.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(namesArray);
```

### Testing elements of an array
```JavaScript
const numbersToTest = [1, 2, 3, -1];

const allPositive = numbersToTest.every(v => v >= 0);
console.log(allPositive);

const filtered = numbersToTest.filter(v => v >= 0);
console.log(filtered);
```

### Map function of an array object
```JavaScript
const htmlFromMapValuesArr = filtered.map(n => '<li>' + n + '</li>');
const htmlString = htmlFromMapValuesArr.join('\n');
console.log(htmlString);

const objectsArray = filtered.map(n => new Object({value: n}));
console.log(objectsArray);
```

### Chaining methods
```JavaScript
const numbersToChain = [1, -1, 2, 3];
const outputChain = numbersToChain.filter(n => n >= 0).map(n => ({value: n})).filter(obj => obj.value > 1);
console.log(outputChain);
```

### Reducing an array
```JavaScript
const numbersToReduce = [1, -1, 2, 3];
const sumOfNumbers = numbersToReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfNumbers);
```

## Functions continued
### Anonymous functions
```JavaScript
let doSomething = function() { console.log('Do something'); };  // expression
doSomething();
```

### Hoisting
- Hoisting is the process of moving function declarations to the top of the file in runtime.
- Function declarations are hoisted, function expressions are not hoisted

### Function arguments
```JavaScript
function sumArguments() {  // even if the function is declared without parameters we can pass them. They are in the arguments iterable
    let total = 0;
    for (let value of arguments) {  // arguments is an array-like object
        total += value;
    }
    return total;
}

console.log(sumArguments(1, 2, 3));
```

### Rest operator used for passing args to a functions
```JavaScript
function sumRest(...args) {
    return args.reduce((acc, currentValue) => acc + currentValue);
}
console.log(sumRest(1, 2, 3, 4, 5));
```

### Default parameters
Using truthy operator we can set default parameters (not a preferred way)
```JavaScript
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
```

Better option is to use default parameters
```JavaScript
function interest1(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
```

## Objects continued
###Getters and setters
```JavaScript
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
```

## Error handling

[Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

```JavaScript
personObject = {
    firstName: 'Marcin',
    lastName: 'Kwiatkowski',
    // This is annotation for the linter
    /**
     * @param {string} value
     */
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string');  // Throwing runtime error
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
```

## Let vs var
- Let is block scoped, var is function scoped. Let is the preferred way to declare variables.
- When using var, the variable is hoisted to the top of the function, when using let, the variable is hoisted to the top of the block.
- When using var in a main block, the variable is hoisted to the top of the file and it can overwrite the window object.

## The this keyword explained
- In a method, this refers to the object that is executing the current function
- In a function, this refers to the global object (window in a browser, global in Node.js)
```JavaScript
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // 'this' is used to pass the reference to the video object. Otherwise this, inside forEach (which doesn't belong to video object), will refer to the global object (window in the context of browser)
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
```

If 'this' cannot be passed as an argument, it can be stored in a variable. However, this is not a preferred way. See below.
```JavaScript
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
```

Using call, apply or bind to set the value of this:
```JavaScript
function playVideo(a, b) {
    console.log(this);
}

playVideo(1, 2) // => 'this' inside playVideo refers to the global object
playVideo.call({name: 'Marcin'}, 1, 2); // => this refers to the object passed as the first argument
playVideo.apply({name: 'Marcin'}, [1, 2]); // => this refers to the object passed as the first argument
playVideo.bind({name: 'Marcin'})(1, 2); // => this refers to the object passed as the first argument
```

```JavaScript
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }).bind(this);  // bind returns a new function, so video3 is in its scope
    }
};
```

And using arrow functions (best, cleanest way to access 'this'):
```JavaScript
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);   // this refers to the video object as it is an arrow function
        });
    }
};
```

## Classes
### Declaration
```JavaScript
class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('Draw');
    }
}
```

### Static methods
```JavaScript
class Math2 {
    static abs(value) {
        return value >= 0 ? value : -value;
    }
}
```

### Inheritance
```JavaScript
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
```

### Private members using symbols
```JavaScript
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
```

## Generators
```JavaScript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

for (let value of generatorFunction()) {
    console.log(value);
}
```

## Async functions
TBD
See: [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
```JavaScript
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
```