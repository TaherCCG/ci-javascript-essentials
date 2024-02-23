function getFormDetails(event) {
    event.preventDefault();
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    
    let user=name.value;
    let userEmail=email.value;
    
    let nameResult=document.getElementById("name-result");
    let emailResult=document.getElementById("email-result");
    
    nameResult.innerHTML=user;
    emailResult.innerHTML=userEmail;    
}

let newsletterForm = document.getElementById("newsletter-signup");
newsletterForm.addEventListener('submit', getFormDetails);

