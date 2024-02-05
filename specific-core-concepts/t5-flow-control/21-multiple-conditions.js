// Multiple Conditions

/* The if statement can be combined with an else if... else statement. This allows for more than 
two possible outcomes. You can add as many else if statements as you’d like, to make the code more expressive. */

// javascript code
let age = 15;
let result;

if (age > 21) {
    result = "drink whiskey";
} else if (age >= 18) {
    result = "drink beer";
} else {
    result = "drink apple juice";
}

console.log(result);