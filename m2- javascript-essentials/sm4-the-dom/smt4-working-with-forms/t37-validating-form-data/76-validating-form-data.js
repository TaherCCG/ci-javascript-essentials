let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];

// Write your code here
let form = document.getElementById("registration-form");
form.addEventListener("submit", handleSubmit);

let errorMsg = document.getElementById("errors");

// handle function
function handleSubmit(event) {
    event.preventDefault();
    let username = form.elements['username'].value;
    
    // check if username exists
    let usernameExists = false;
    for (x = 0; x < usernames.length; x++) {
        if (usernames[x] === username) {
            usernameExists = true;
            break;
        }
    }
    
    // if username exists print error else add to array
    if (usernameExists) {
        errorMsg.innerHTML = "Sorry, the username " + username + " is already in use. Please choose another username."; 
    } else {
    usernames.push(username);
    form.submit();
    // console.log array
    console.log(usernames);
    }
}
