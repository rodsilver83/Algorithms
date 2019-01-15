// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const check = ['a','e','o','i','u'];
//     return str.toLowerCase().split('').filter((char) => {
//         return check.includes(char);
//     }).length;
// }

// function vowels(str) {
//     const check = ['a','e','o','i','u'];
//     return str.toLowerCase().split('').reduce((total, char) => {
//         return total + (
//             (check.includes(char)) ? 1 : 0);
//     }, 0);
// }

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0; 
}

module.exports = vowels;
