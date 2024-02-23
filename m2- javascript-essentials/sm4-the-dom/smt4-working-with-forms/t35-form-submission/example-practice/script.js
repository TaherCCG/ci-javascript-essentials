let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Do our own stuff
    console.log('Submitting...');

    // Submit it ourselves
    contactForm.submit();

    // Do more of our own stuff
    console.log('Submission Complete!');
}


let contactForm2 = document.getElementById('contact-form2');
contactForm2.addEventListener('submit', handleSubmit2);

function handleSubmit2(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
  let userName = contactForm2.elements['username'].value;
  let email = contactForm2.elements['email'].value;
  let message = contactForm2.elements['message'].value;

  // Remember template literals with backticks?
  let html = `
    <p>Hi ${userName}! Thanks for sending us a message! We'll respond to ${email} soon. For reference, the message you submitted is below:</p>
    <p>${message}</p>
  `;

  // Put the above HTML in the response div below the form
  let responseDiv = document.getElementById('response');
  responseDiv.innerHTML = html;
  responseDiv.style.display = 'block';
}