// Built-in Functions - Working With Date Objects Challenge
// Date objects are created with the new Date() constructor. Once you have a Date object, you can access its methods with the dot notation.

let today = 1597673635658;
let date = new Date(today);

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

console.log(day);
console.log(month);
console.log(year);
// The output will be:
// 17
// 7
// 2020

