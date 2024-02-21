// Special characters in JavaScript


// !: often used to indicate "not", or to negate a piece of data
// example of negating a boolean:
let myBoolean = true;
console.log(!myBoolean); // false


// $: sometimes used as a shorthand way to inject a variable into a string: let string = `this is my ${variable}`;
// example:
let myName = "John";
let myString = `Hello, my name is ${myName}`;
console.log(myString); // Hello, my name is John

// \: commonly used as an "escape character", to tell the interpreter to interpret the character following it literally
// example:
let myString1 = "This is a \"string\" with quotes in it";
console.log(myString1); // This is a "string" with quotes in it

// %: used in Django to denote template logic ({% if thing == True %} ... {% endif %})
// example:
let x = 5;
if (x % 2 === 0) {
    console.log("x is even");
}
else {
    console.log("x is odd");
}

// ^: used in regular expressions to denote the beginning of a string
// example:
let myString2 = "Hello, world";
let myRegex = /^Hello/;
console.log(myRegex.test("Hello, world")); // true
console.log(myRegex.test("Goodbye, world")); // false

// &: used in logical operations to denote "and"
// example:
let myBoolean1 = true;
let myBoolean2 = false;
console.log(myBoolean1 && myBoolean2); // false

// *: sometimes used to mean "all", "wildcard" or "everything", and sometimes used to "unpack" lists and arrays as a shorthand way of creating variables
// example:
let myArray = [1, 2, 3, 4, 5];
console.log(...myArray); // 1 2 3 4 5
let [a, b, ...rest] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// **: sometimes used to "unpack" objects or dictionaries into their key:value pairs as a shorthand way of creating variables




/////////////////////////////////////////////////////

// Casing in JavaScript

// Casing refers to the use of upper and lower case letters in a programming language. In JavaScript, casing is used to distinguish between different types of data, such as variables, functions, and classes. There are several different types of casing that are commonly used in JavaScript:

/*
lowercase: All letters are lowercase
Capitalized: Only the first letter is capitalized
camelCase: The first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized
PascalCase: The first letter of every word is capitalized
snake_case: Words are separated by underscores
hyphen-delimited: Words are separated by a hyphen 
*/