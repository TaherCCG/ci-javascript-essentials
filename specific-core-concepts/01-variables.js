// Create your variables here.
// Create a variable `pi` and set it to 3.14
const pi =3.14;
// const is used to declare variables with constant values. Once a value is assigned to a const variable, it cannot be reassigned.
// const is block-scoped, much like variables defined using the let statement. The const keyword creates a read-only reference to a value.
// The value of a constant cannot change through reassignment, and it can't be re-declared.


// Create a variable `radius` and set it to 12
let radius =12;
// let is used to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the 
// var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
// let also has a different scoping behavior when used inside a loop. The variable is only visible within the loop.
// let is preferred over var when it comes to variable declaration.

// Create a variable `circumference` and set it to `2 * pi * radius`
var circumference=pi*2*radius;
// var is used to declare variables that are scoped to the running execution context in which they are declared, or if declared outside of any function, global.
// var is function-scoped, meaning that it is visible within the function in which it is declared.
// var is hoisted to the top of the function in which it is declared. This means that you can use the variable before it is declared.

// Console log `pi`, `radius`, and `circumference`
console.log(pi);
console.log(radius);
console.log(circumference);

