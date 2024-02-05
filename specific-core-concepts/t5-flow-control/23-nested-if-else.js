// Nested If/Else Statements
// Nested if/else statements are used to execute different code based on different conditions.


let user = true;
let emailVerified = false;

if (user) {
    if (emailVerified){
        console.log("Welcome to our web-site");
    } else {
        console.log("Please verify your email");
    } 
    } else {
         console.log("You need to be a user to visit this page");
    
}

// Output: Please verify your email
