// Using Arrow Functions

// Arrow functions are a more concise way to write function expressions.

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //code block
    return a + b;
}
let sum = addTwoNumbers(5, 10);
console.log(sum); // 15

// Arrow Function with Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(5, 10);
console.log(sum2); // 15

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
// const addTwoNumbers3 = (a, b) => (a + b); // also works
let sum3 = addTwoNumbers3(5, 10);
console.log(sum3); // 15

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello, World!"); // Hello, World!

// Arrow Function with No Parameters
const sayHello = () => console.log("Hello, World!");
sayHello(); // Hello, World!

// Returning multiple lines
const returnMultipleLines2 = () => (
    `<p> 
    This is a paragraph 
    </p>`
)
console.log(returnMultipleLines2()); // <p> This is a paragraph </p>

// Returning an object
const returnObject = () => ({ name: "John", age: 30 });
console.log(returnObject()); // { name: 'John', age: 30 }


