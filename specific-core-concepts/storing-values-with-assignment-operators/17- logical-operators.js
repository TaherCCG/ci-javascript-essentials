// Determining Truth With Logical Operators
// Logical operators are used to determine the logic between variables or values.

let passport = true;
let ticket = true;
let weapons = false;
let a = 10;
let b = 5;

// write your code here

let either =a > 10 || b <= 5;
console.log(either); // true

let getOnFlight = passport && ticket && !weapons;
console.log(getOnFlight); // true