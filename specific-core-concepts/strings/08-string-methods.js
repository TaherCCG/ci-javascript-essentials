// String Methods
// String method slice() returns a portion of a string between two index positions. The original string is not modified.
// String method toLowerCase() returns the calling string value converted to lowercase.


// These variables will be sliced and concatenated
// to form the emailAddress variable:
let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';

// Define the emailAddress variable here.
// Remember to use the slice() and toLowerCase() string methods:

let emailAddress =fullName.toLowerCase().slice(0,6) + '.' + fullName.toLowerCase().slice(7) + '@' + domainName + '.' + tld;

// This will log the emailAddress variable to the console
console.log(emailAddress);
