// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution two - regex
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

//solution one - iterative
// function vowels(str) {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

//my solution
// function vowels(str) {
//     const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
//     const stringArray = str.toLowerCase().split('');
//     let vowelCounter = 0;
//     for(let char of stringArray){
//         if(vowels[char]){
//             vowelCounter++;
//         }
//     }

//     return vowelCounter;
// }

module.exports = vowels;
