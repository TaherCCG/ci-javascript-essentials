// Switch Case Statements
// Switch case statements are used to execute different code based on different conditions.
//
// The switch statement is used to select one of many code blocks to be executed.
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// The default keyword specifies the code to run if there is no case match.
// The break keyword stops the execution of the code block.
// The switch statement is often used as an alternative to if-else statements.


// javascript code
let result = ''; // Do not change this. You assign to this variable within the switch statement.
let errorType = "page";

// write your code here
switch (errorType) {
    case "username":
        result = "That username is incorrect, please try again.";
        break;
    case "password":
        result = "Incorrect password, please try again.";
        break;
    case "page":
        result = "Sorry this page doesn't exist.";
        break;
    default:
        result = "Error message unknown";
}

