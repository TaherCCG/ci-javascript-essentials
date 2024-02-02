// For Loops
/* For loops are the most common type of loop in JavaScript. They are often used to execute a block of code a certain number of times. The for loop includes three expressions, separated by semicolons, inside the parentheses:
    - The initialization expression is executed once before the loop starts.
    - The condition expression is evaluated at the beginning of each iteration. If it is true, the loop continues. If it is false, the loop stops.
    - The final expression is executed at the end of each iteration. */


// javascript code
let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

// Write your code here

for (var x = 0; x< numbers.length; x++) {
    let result=numbers[x] +10;
    console.log(result) 
}
/* 
Output: 
 52
 75
 10
 19
 83
 20
 21
 54
*/