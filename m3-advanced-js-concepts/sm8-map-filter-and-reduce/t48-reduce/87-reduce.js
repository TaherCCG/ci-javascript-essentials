let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 73, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, english: 88, maths: 97, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];

// ==================== Attempt 1  - 1st try =====================  
// const biggest = students.reduce((acc, student) => {
//     if (student.results.english > acc.results.english) {
//         acc = student;
//     }
//     return acc;
// }   
// , students[0]);

// let message = `name: ${biggest.name}, max: ${biggest.results.english}`;
// console.log(message);
//
// ==================== Attempt 2  - 2nd try =====================
// const biggest = students.reduce((max, student) => {
//     const score = student.results.english;
//     if (!max || score > max.max) {
//         return { name: student.name, max: score };
//     }
//     return max;
// }, 0);
// console.log(biggest);
//
// ==================== Attempt 3  - 3rd try =====================
// looked at various examples and tried to understand the reduce method
const biggest = students.reduce((acc, student) => {
    if (student.results.english > acc.max || acc.max === undefined) {
        return { name: student.name, max: student.results.english };
    } else {
        return acc;
    }
}, {});

console.log(biggest);

