// Data Structures Practice
// Practicing how to work with data structures in JavaScript.


// Array Indexing
console.log('-------Array Indexing----------');

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let varOne = myArray[0];
console.log(varOne); 
let varTwo = myArray[4];
console.log(varTwo);
let varThree = myArray[2];
console.log(varThree);

console.log('-----------------');

let lotsOfElements = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(lotsOfElements.length);
let firstElement = lotsOfElements[0];
console.log(firstElement);
let lastElement = lotsOfElements[lotsOfElements.length - 1];
console.log(lastElement);
lotsOfElements[0] = 'z';
console.log(lotsOfElements);

for (let i = 0; i < lotsOfElements.length; i++) {
  console.log(lotsOfElements[i]);
};

console.log('-----------------');


// Array Methods
console.log('-------Array Methods - Shifting----------');

let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let firstItem = fruits.shift();

console.log(firstItem);
console.log(fruits);

let newLength = fruits.unshift('mangoes');
console.log(newLength);
console.log(fruits);

let lastItem2 = fruits.shift();
console.log(lastItem2);

console.log('-------Array Methods - Popping----------');

let lastItem = fruits.pop();
console.log(lastItem);
console.log(fruits);

let newLength2 = fruits.push('grapes');
console.log(newLength2);
console.log(fruits);

console.log('-------Array Methods - Splicing----------');

let removedItem = fruits.splice(2, 1);
console.log(removedItem);
console.log(fruits);

let removedItem2 = fruits.splice(2, 0, 'pears', 'cherries');
console.log(removedItem2);
console.log(fruits);

let removedItem3 = fruits.splice(2, 2, 'pears', 'cherries');
console.log(removedItem3);
console.log(fruits);

console.log('-------Array Methods - Concatenating----------');

let moreFruits = ['grapes', 'mangoes', 'kiwi', 'papaya'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);


// Array Object
console.log('-------Array Object----------');

let myObject = {
    name: 'Trigz',
    age: 36,
    isStudent: false
    };
console.log(myObject);
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.isStudent);
myObject.isStudent = true;
console.log(myObject.isStudent);

console.log('-----------------');

let spaceship = {
    name: 'Red Dwarf',
    type: 'Mining Vessel',
    owner: 'Jupiter Mining Corporation',
    captain: 'Frank Hollister',
};
console.log(spaceship);

// Object Properties
console.log('-------Object Properties----------');
// Add new properties
let person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    location: 'USA'
  };
  console.log(person);
// the line below adds a new property to the person object
  person['bestFriend'] = 'Mike';
  console.log(person['bestFriend']);  // 'Mike'
// the line below adds a new property to the person object at same time as defining it with a dot notation
  person.wife = 'Mary';
  console.log(person.wife);  // 'Mary'
  
  console.log(person);

console.log('-----------------');
// Update existing properties

let person2 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    location: 'USA'
  };

  // Change the value of a property
  person2['age'] = 31;
  console.log(person2['age']);  // 31
  // or
  // the dot notation is used to change the value of a property
  person2.location = 'Spain';
  console.log(person2.location);  // 'Spain'

  console.log('-----------------');

  // Delete a property
  let person3 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    location: 'USA'
  };
  delete person3['lastName'];
  delete person3.age;
  console.log(person3);

  // Object Dictionary
  console.log('-------Object Dictionary----------');

  let car = {
    location: 'garage',
    ignition: 'off',
    fueled: true,
  };
  
  console.log(Object.keys(car));
  // returns ["location", "ignition", "fueled"]
  
  // Unsupported on JavaScript Tutor
  console.log(Object.values(car));
  // returns ["garage", "off", true]
  
  console.log(Object.entries(car));  
  // returns [Array(2), Array(2), Array(2)]
  // Expanded view of the three arrays:
  // 0: (2) ["location", "garage"]
  // 1: (2) ["ignition", "off"]
  // 2: (2) ["fueled", true]
  
  console.log(car.hasOwnProperty('ignition'));  // true
  console.log(car.hasOwnProperty('drive'));  // false
  console.log(car.toString());


let car1 = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};

console.log(car1.ignition);
car1.start();
console.log(car1.ignition);

console.log('-----------------');

// Iterating Data Structures
console.log('-------Iterating Data Structures----------');

let myArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray2.length; i++) {
  console.log(myArray2[i]);
}

//for in loop
let myObject2 = {
  name: 'Trigz',
  age: 36,
  isStudent: false
};
for (let key in myObject2) {
  console.log(myObject2[key]);
}

let blue= 3;
let red= 5;
let yellow= 2;
let green= 6;
let purple= 1;
let orange= 4;
let colors = [blue, red, yellow, green, purple, orange];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log('-----------------');


let mostColors;
let leastColors;

// most and least colors values
for (let i = 0; i < colors.length; i++) {
  if (colors[i] > mostColors || mostColors === undefined) {
    mostColors = colors[i];
  }
  if (colors[i] < leastColors || leastColors === undefined) {
    leastColors = colors[i];
  }
}
console.log(mostColors);
console.log(leastColors);

console.log('-----------------');


// Color names sorted by number of colors count values
let colorNames = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
let mostColorName;
let leastColorName;
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === mostColors) {
    mostColorName = colorNames[i];
  }
  if (colors[i] === leastColors) {
    leastColorName = colorNames[i];
  }
}
console.log(mostColorName + " .... " + mostColors);
console.log(leastColorName);


console.log('-----------------');


let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i of food) {
  console.log(i);
}


for (let i in food) {
  console.log('index', i, 'is', food[i]);
}

console.log('-----------------');

let petNames = {
  dog: 'Fido',
  cat: 'Max',
  fish: 'Bubbles',
  python: 'Mr. Slithers',
}

for (let i in petNames){
  console.log(petNames[i], 'is a', i);
}

console.log('-----------------');

let pairs = Object.entries(petNames);
for (let pair of pairs){
  console.log(pair[1], 'is a', pair[0]);
}

console.log('-----------------');


// Nested Data Structures
console.log('-------Nested Data Structures----------');

let myObject3 = {
  name: 'Trigz',
  age: 36,
  isStudent: false,
  address: {
    street: '123 Some St',
    city: 'Some City',
    state: 'WM',
    postcode: 'B1 234'
  }
};
console.log(myObject3);
console.log(myObject3.address);

console.log('-----------------');



let company = {
  name: 'Apple, Inc',
  founded: 1976,
  financials: {
    incomeStatement: {
      years: [2020, 2019, 2018],
      revenue: [125, 120, 115],
      costs: [100, 100, 100],
      profit: [25, 20, 15]
    },
    balanceSheet: {
      years: [2020, 2019, 2018],
      assets: [200, 190, 180],
      liabilties: [100, 95, 90],
      equity: [100, 95, 90]
    },
    cashFlow: {
      years: [2020, 2019, 2018],
      operating: [75, 65, 55],
      investing: [22, 20, 18],
      financing: [-94, -80, -75]    
    },
    profitAndLoss: {
      years: [2020, 2019, 2018],
      grossProfit: [25, 20, 15],
      netIncome: [25, 20, 15],
    }
  },
  competitors: ['Microsoft', 'Amazon', 'Samsung', 'Sony']
}

console.log(company.name);
console.log(company.competitors);
console.log(company.competitors[3]);
console.log(company.financials.incomeStatement.years);
console.log(company.financials.incomeStatement.revenue[0]);
console.log(company.financials.balanceSheet.assets[2]);
console.log(company.financials.cashFlow.financing[1]);
console.log(company.financials.profitAndLoss.netIncome[2]);

console.log(Math.max(...company.financials.incomeStatement.revenue));
console.log(Math.min(...company.financials.incomeStatement.revenue));



console.log('-----------------');