// Type Coercion
// Type coercion is the process of converting value from one data type to another (such as string to number, object to boolean, and so on). 
// Any type, be it primitive or an object, is a valid subject for type coercion. JavaScript is a weakly typed language, 
// so type coercion can be performed implicitly by the language.

// javascript code
let num100 = 100 ;
let str100 = "100" ;
console.log(num100 == str100); // true

console.log(num100 === str100); // false

console.log(num100 + str100); // 100100
console.log(num100 + Number(str100)); // 200

