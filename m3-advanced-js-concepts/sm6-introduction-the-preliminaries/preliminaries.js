// Advance JS Concepts: Introduction - The Preliminaries

/* 
Four critical JavaScript concepts that you must understand
to become a competent and confident advanced JavaScript developer.
*/

// 1. Vanilla JS functions
// 2. The "this" keyword
// 3. Data structures
// 4. Ternary conditionals

// 1. Vanilla JS functions example:
function myFunction() {
  console.log("Hello World!");
}

// 2. The "this" keyword example:
const myObject = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

myObject.greet();

// 3. Data structures example:
const myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);

// 4. Ternary conditionals example:
const myNumber = 10;
const isEven = myNumber % 2 === 0 ? true : false;
console.log(isEven);






