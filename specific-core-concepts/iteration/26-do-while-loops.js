// Do/While Loops
/*
    - The do/while loop is a variant of the while loop. This loop will execute the code block once, before 
    checking if the condition is true, then it will repeat the loop as long as the condition is true.
    - The do/while loop will always execute the block of code at least once, because it checks the condition 
    after the block of code is executed.
    - The do/while loop is used when you want to execute the code block at least once, no matter what. 
*/

let attemptedUploads = 0;

do {
    console.log("Attempting upload...");
    attemptedUploads++ ;
} while (attemptedUploads < 5 );

console.log("Upload attempts exceeded maximum")

/*
Output:
Attempting upload...
Attempting upload...
Attempting upload...
Attempting upload...
Attempting upload...
Upload attempts exceeded maximum
*/