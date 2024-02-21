// Periods (.) are used to access properties of objects and to call methods of objects. They are also used to access elements of an array.

// example:
let myObject = { name: "John", age: 30 };
console.log(myObject.name); // John
console.log(myObject.age); // 30
console.log(myObject["name"]); // John

let person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
}

console.log(person.firstName); // John
console.log(person.lastName); // Smith
console.log(person.age); // 30
console.log(person["age"]); // 30
console.log(person.firstName + " " + person.lastName); // John Smith
console.log(person["firstName"] + " " + person["lastName"]); // John Smith
console.log(person["first" + "Name"]); // John  (concatenation of "first" and "Name")
console.log(person["last" + "Name"]); // Smith  (concatenation of "last" and "Name")


