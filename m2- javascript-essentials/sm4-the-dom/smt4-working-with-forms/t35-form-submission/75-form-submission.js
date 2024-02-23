let test; // assignment to this variable is to be done inside the function you create
// write your code below

let form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting form...")
    test=form.elements['message'].value;
    console.log(test);
    form.submit();
    console.log("form submitted");
    
}