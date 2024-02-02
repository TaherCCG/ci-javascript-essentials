// Variables and Scope
// Variables are used to store data. In JavaScript, there are three ways to declare a variable: var, let, and const. The var keyword is used in pre-ES6 versions of JavaScript. The let and const keywords were introduced in ES6. The let keyword is used to declare a variable that can be reassigned, while the const keyword is used to declare a variable that cannot be reassigned.
// Scope refers to the visibility of variables. In JavaScript, variables can be declared globally or locally. Variables declared outside of a function are global variables and can be accessed and modified anywhere in the program. Variables declared inside a function are local variables and can only be accessed and modified within the function.

const company = "Big Bucks co.";
let profit = 900;
let financeManager = "Richard";


if (profit < 1000) {
	var richardFired = true;
	financeManager = "Fay";
}

console.log(company);
console.log(financeManager);
console.log(richardFired.toString());

