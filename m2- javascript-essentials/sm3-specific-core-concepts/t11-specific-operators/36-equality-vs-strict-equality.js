/* Equality vs. Strict Equality (== vs. ===)
 - The equality operator (==) is used to compare two values or expressions. If they are equivalent, it returns true.
 - The strict equality operator (===) compares the values and the types of the values. If they are equivalent, it returns true.
*/

// Example
let varA = '10';
let varB = 10;
let varC = "";
let varD = 0;
let varE = 1;

// Output
console.log(varA == varB); // true
console.log(varA === varB); // false
console.log(varC == varD); // true
console.log(varC === varD); // false
console.log(varC == varE); // false



