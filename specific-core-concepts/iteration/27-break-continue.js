// Controlling Iteration with break and continue
/* 
    - Break and continue are two keywords that can be used to control the flow of a loop. When a break statement is encountered inside a loop, 
the loop is immediately terminated and the program control resumes at the next statement following the loop. The continue statement is used 
to skip the current iteration of the loop and continue with the next iteration. 
    - The break and continue statements can be used in both while and for loops. 
    - The break statement is used to exit the loop regardless of the loop condition. 
    - The continue statement is used to skip the current iteration of the loop, and continue with the next iteration. 
    - The break and continue statements can be used in both while and for loops. 
*/

// Create a for loop to console.log out each number from 0 to 20, including 20. If you run your code now, this should log out all the numbers

// javascript code

for (let x = 0; x <= 20; x++) {
    if (x % 2 !== 0) {
        continue;
    }

    if (x === 10) {
        break;
    }
    console.log(x);
}

/*
Output:
0
2
4
6
8
*/