let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => sorterd = [...arr, ...letters].sort().reverse();

/*  //Below function works too. 
const updateSortReverse = (arr, ...letters) => {
    let sorted = [...arr, ...letters];
    return sorted.sort().reverse();
};
*/

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);
