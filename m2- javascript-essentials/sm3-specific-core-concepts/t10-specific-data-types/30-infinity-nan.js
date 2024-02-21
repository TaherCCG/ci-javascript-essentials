// Infinity, -Infinity and NaN
// Infinity is a numeric value representing infinity.
// -Infinity is a numeric value representing negative infinity.
// NaN is a numeric value representing Not-A-Number.

// javascript code
let notANumber=isNaN("Hello World");
console.log(notANumber);  // true

let isANumber=isNaN(1234);
console.log(isANumber); // false

let finiteNumber=isFinite(1234);
console.log(finiteNumber); // true

let notAFiniteNumber=isFinite(1.52e783);
console.log(notAFiniteNumber) // false
// The isNaN() function determines whether a value is NaN or not. It returns true if the value is NaN, and false if not.
