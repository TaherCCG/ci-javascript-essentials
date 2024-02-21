// Functions & Objects Practice
// Practicing how to work with functions and objects in JavaScript.


// Functions
console.log('-------Functions----------');

function sayHello() {
    console.log('Hello World!');
}

sayHello();

function sayHelloTo(name) {
    console.log('Hello ' + name + '!');
}

sayHelloTo('John');
sayHelloTo('Mary');

function addTwo(num1, num2) {
    return num1 + num2;
}
addTwo(3, 5);
console.log(addTwo(3, 5));


console.log('-----------------');

// Calling Functions
console.log('-------Calling Functions----------');

// Define an array of arrays (nested data structure)
let operands = [
    [3, 5],
    [8, 6],
    [1, 2],
    [9, -2]
];

// Define a function with parameters
function addTwo(num1, num2) {
    return num1 + num2;
}

// Create an empty array to hold the sums
let sums = [];

// Use a for loop to iterate the operands and call addTwo()
for (let pair of operands) {
    let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
    sums.push(sum);  // array methods
}

// Log the sums
console.log(sums);

function buildHelloArray(num) {
    let helloArray = [];
    for (let i = 0; i < num; i++) {
        helloArray.push('Hello');
    }
    return helloArray;
}

let result = buildHelloArray(7);
console.log(result); // ['Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello']

console.log('-----------------');


// Built-in Functions - Working With Math
console.log('-------Built-in Functions - Working With Math----------');

let random = Math.random();
console.log(random);

let someInteger = Math.floor(25.65);
console.log(someInteger);

let someInteger1 = Math.ceil(25.65);
console.log(someInteger1);

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);

console.log('--------round()---------');

console.log(Math.round(1.25));  // 1
console.log(Math.round(1.65));  // 2
console.log(Math.round(1.5));  // 2
console.log(Math.round(1.49));  // 1

console.log('--------min()max()--------');

console.log(Math.min(1, 2, 3));  // 1
console.log(Math.max(1, 2, 3));  // 3

// If one of the objects can't be converted, the result is NaN:
console.log(Math.min(1, 2, 'Hello!'));  // NaN
console.log(Math.max(1, 2, 'Hello!'));  // NaN

// If you give .min() nothing, you get Infinity:
console.log(Math.min());  // Infinity

// If you give .max() nothing, you get -Infinity:
console.log(Math.max());  // -Infinity

console.log('--------pow()---------');

console.log(Math.pow(2, 4));  // 16
console.log(Math.pow(3, 3));  // 27
console.log(Math.pow(4, 2));  // 16
console.log(Math.pow(5, 3));  // 125

console.log('-------sqrt()----------');

console.log(Math.sqrt(4));  // 2
console.log(Math.sqrt(9));  // 3
console.log(Math.sqrt(2));  // 1.4142135623730951

console.log(Math.sqrt(0));  // 0
console.log(Math.sqrt(-0));  // -0
console.log(Math.sqrt(-1));  // NaN

console.log('----------------');


// Built-in Functions - Working With Date Objects
console.log('-------Built-in Functions - Working With Date Objects----------');

let today = new Date();
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

console.log('-----------------');
