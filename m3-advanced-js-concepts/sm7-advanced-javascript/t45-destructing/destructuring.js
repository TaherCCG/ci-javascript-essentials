// Destructuring

/* Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, 
or properties from objects, into distinct variables. */

// Destructuring assignment

// Array destructuring
let ages = [20, 30, 40];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;

console.log(john, mary, joe); // 20 30 40


// Object destructuring
let jobs = {
    mike: 'doctor',
    jill: 'developer',
    alicia: 'teacher',
};
let { mike, jill, alicia} = jobs;
console.log(mike, jill, alicia); // doctor developer teacher

// Subsets destructuring
let languages = ['English', 'Spanish', 'French', 'German', 'Italian'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // English Spanish

// Skipping items
let [, maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary); // Spanish German

let languages2 = {
    firstLanguage: 'English',
    secondLanguage: 'French',
    thirdLanguage: 'German',
    fourthLanguage: 'japanese',
};
let { firstLanguage, fourthLanguage } = languages2;
console.log(firstLanguage, fourthLanguage); // English japanese

// using rest parameter syntax
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); // apple
console.log(secondFavorite); // banana
console.log(others); // [ 'orange', 'grape', 'kiwi' ]

let favoriteFoods = {
    brian: 'pizza',
    anna: 'tacos',
    sarah: 'sushi',
    andrea: 'pasta',
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian); // pizza
console.log(anna); // tacos
console.log(rest); // { sarah: 'sushi', andrea: 'pasta' }



