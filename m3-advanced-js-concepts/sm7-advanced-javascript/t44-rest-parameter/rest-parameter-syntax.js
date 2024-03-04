// Rest Parameter Syntax
/* To use the rest parameter syntax, you need to use the ... operator followed by the name of the array that will contain 
the rest of the parameters. The rest parameter must be the last parameter in the function definition. */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum= sumAll(1, 2, 3);
console.log("Sum:",sum); // 6

// Extra arguments are ignored
let sum2= sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:",sum2); // 6

// Function using ...rest parameter
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3= sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:",sum3); // 21


