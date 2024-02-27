let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let totalPoints= 0;
    let totalStudents = 0;
    
    for (let student of students) {
        if (student.results[subject] !== undefined) {
            totalPoints += student.results[subject];
            totalStudents++;
            
            // below 2 console logs are for testing
            console.log(totalPoints);
            console.log(totalStudents);
        }
    }
    // console log below is for testing
    console.log(`\nTotal points = ${totalPoints} \n divided by \nTotal Students: ${totalStudents} \n Average : ` + totalPoints / totalStudents);
    return totalPoints / totalStudents;
};

let averageMarks = averagePoints(students,"english");
console.log(averageMarks);
