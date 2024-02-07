// Window, Document & Body 
// 1. window: The global window object represents an open window in a browser
// 2. document: The document object represents the HTML document that is displayed in that window
// 3. body: The body object represents the content of the document


/* Here, the document.getElementById() method was used to access the specific span element we wanted, based on its id attribute, which was timer. The window object also has a number of useful methods and properties like this, such as:

window.document: The document object in the example above
window.history: A reference to the window's history (i.e. browser history)
window.innerWidth/window.innerHeight: The inner size of the current window including the scrollbars but not including menu bars
window.outerWidth/window.outerHeight: The outer size of the current window including menu bars
window.location: A getter/setter for the current URL
window.localStorage: A storage medium for storing data the user might need for the page to function properly, such as cookies.*/

document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;

document.getElementById('title').innerHTML = document.title;

document.body.onload = function() {
    console.log('We can call various methods of the body object as well, such as this one, body.onload, which gets called when loading is complete! Now we know that the body has been loaded!');
}

