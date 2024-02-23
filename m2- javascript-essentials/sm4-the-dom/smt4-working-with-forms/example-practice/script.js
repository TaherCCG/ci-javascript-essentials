function handleSubmit(event) {
    // Prevent the default submit action (more on this in a couple units)
    event.preventDefault();

    // Get the two input elements
    let user = document.getElementById('username');
    let pass = document.getElementById('password');

    // Log their values to the console
    console.log('Username:', user.value);
    console.log('Password:', pass.value);
}

// This gets the form and attaches an event listener to it
let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);