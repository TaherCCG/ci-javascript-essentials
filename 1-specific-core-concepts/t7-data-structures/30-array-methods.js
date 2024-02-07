// Array Methods
// Array methods are built-in JavaScript functions that can be used to manipulate arrays.

let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
console.log(crew);

// Write your code here
let lastCrewMember = crew.pop();
console.log(lastCrewMember);
console.log(crew);

crew.sort()
console.log(crew);

let newCrew =crew.slice(1,4)
console.log(newCrew);

newCrew.push("Guinan");
console.log(newCrew);

