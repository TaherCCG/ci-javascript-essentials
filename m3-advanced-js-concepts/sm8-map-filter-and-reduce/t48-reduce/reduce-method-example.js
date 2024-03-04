

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total: ", acc + curr
    );
    return acc + curr;
});

console.log(sum);
// Output:
// Accumulator:  0 Current Value:  1 Total:  1
// Accumulator:  1 Current Value:  2 Total:  3
// Accumulator:  3 Current Value:  3 Total:  6
// Accumulator:  6 Current Value:  4 Total:  10


// Simplified:
let sum1 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum1); // 10

// =================================================================



const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => {
    return acc + curr.yrsExperience;
}
    , 0);
console.log(totalExperience); // 16

let simplifiedTotalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(simplifiedTotalExperience); // 16


// Grouping by a property, and totaling it too

let totalExperienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = 0;
    }
    acc[key] += curr.yrsExperience;
    return acc;
}
    , {});
console.log(totalExperienceByProfession);
// Output:
// { Developer: 12, Designer: 4 }



const groupedByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(curr.yrsExperience);
    return acc;
}
    , {});
console.log(groupedByProfession);
// Output:
// {
//   Developer: [ 5, 7 ],
//   Designer: [ 1, 3 ]
// }

let groupedByNames = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(curr.name);
    return acc;
}
    , {});

console.log(groupedByNames); // { Developer: [ 'Andrew', 'Ariel' ], Designer: [ 'Michael', 'Kelly' ] }

// =================================================================