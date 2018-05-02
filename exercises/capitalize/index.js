// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//solution two
function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result
}

//solution one
// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

//my solution
// function capitalize(str) {
//     let output = '';
//     let index = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ' || i === str.length - 1) {
//             output += str[index].toUpperCase() + str.slice(index + 1, i + 1);
//             index = i + 1;
//         }
//     }

//     return output;
// }

module.exports = capitalize;
