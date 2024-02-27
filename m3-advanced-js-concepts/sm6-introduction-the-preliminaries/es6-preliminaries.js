// ES6 Preliminaries

/* ES6 is a more modern version of JavaScript that includes new features and syntax. 

ES6 is also known as ECMAScript 2015.
*/

/* ES6  common features include:
- var, let & const keywords
    var is globally scoped, let & const are block scoped
    use const for variables that should not be reassigned
    use let for variables that should be reassigned
    use less var, more let & const
    e.g.    let myVariable = 10;
            const myConstant = 20;


- Template Literals
    use backticks to create strings with embedded expressions
    e.g. `Hello, ${name}`

-  Arrow Functions
    concise syntax for writing function expressions
    e.g. const myFunction = (param1, param2) => param1 + param2;

- Spread Operator & Rest Parameter
    spread operator: expands an array into its elements
    rest parameter: collects multiple elements into an array
    e.g.    const myArray = [1, 2, 3, 4, 5];
            console.log(...myArray);
            const myFunction = (...args) => args;
        
*/

// 1. var, let & const keywords example:
let myVariable = 10;
const myConstant = 20;

// 2. Template Literals example:
const name = "John";
console.log(`Hello, ${name}`);

// 3. Arrow Functions example:
const myFunction = (param1, param2) => param1 + param2;

// 4. Spread Operator & Rest Parameter example:
const myArray = [1, 2, 3, 4, 5];
console.log(...myArray);
const myFunction2 = (...args) => args;

/* ES6 as a whole is nothing but a more succinct syntax for writing JavaScript code. 
When an application using ES6 runs, the ES6 code is transpiled, or converted, into regular JavaScript.
*/

