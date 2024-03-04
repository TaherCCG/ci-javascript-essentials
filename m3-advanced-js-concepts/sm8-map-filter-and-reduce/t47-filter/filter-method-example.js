// The Filter Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.



// Simple Filtering
const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough); // [ { name: 'Michael', age: 23 } ]

const paul = people.filter(person => person.name === 'Paul');
const paul1 = people.filter(p => p.name === 'Paul')[0];
console.log(paul1); // { name: 'Paul', age: 18 }
console.log(paul); // [ { name: 'Paul', age: 18 } ]



// Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];

const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
});
console.log(candidates);

const hasStrongSkills = student => student.skills.filter(skill => skill.yrsExperience >= 5).length > 0;
const candidates1 = students.filter(hasStrongSkills);
console.log(candidates1);

// names of the candidates
const candidateNames = candidates.map(candidate => candidate.name);
console.log(candidateNames); // [ 'Mark', 'Jason' ]






