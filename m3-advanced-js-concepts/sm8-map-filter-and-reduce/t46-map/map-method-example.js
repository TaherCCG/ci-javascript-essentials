// The Map Method
// The map() method creates a new array with the results of calling a 
// provided function on every element in the calling array.

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results); // [2, 4, 6, 8, 10]

// Using map()
const multByTwo = function(num) {
  return num * 2;
}
nums.map(multByTwo); // [2, 4, 6, 8, 10]

const mapResults = nums.map(multByTwo);
console.log(mapResults); // [2, 4, 6, 8, 10]

// above code simplified
// Simplified w/ map()
const simplified = nums.map(function(num) { return num * 2});
console.log(simplified); // [2, 4, 6, 8, 10]

// simplified w/ map() and arrow function

const simplifiedArrow = nums.map(num => num * 2);
console.log(simplifiedArrow); // [2, 4, 6, 8, 10]


// with Objects:
const students = [
    { 
        id: 1,
        name: 'John',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    { 
        id: 2,
        name: 'Jane',
        profession: 'Designer',
        skill: 'Design'
    },
    { 
        id: 3,
        name: 'Jim',
        profession: 'Artist',
        skill: 'Drawing'
    },
];

const studentWithIds = students.map(students => [students.id, students.name]);
console.log(studentWithIds);



const student = students.map(student => {
    return {
        id: student.id,
        name: student.name,
    }
});

console.log(student);

const studentAge = students.map(student => {
    return {
        id: student.id,
        name: student.name,
        age: 20
    }
}
);

console.log(studentAge);

// add different age to each student
const studentAge2 = students.map((student, index) => {
    return {
        id: student.id,
        name: student.name,
        age: 20 + index
    }
}
);

console.log(studentAge2);
