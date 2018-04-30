// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Udemy solution three
// function reverse(str) {
//     //split into array
//     //reduce iterates through each index in array
//         //first argument is the output that you are building
//         //second argument is the new charater available on each iteration
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

//Udemy solution Two
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

//Udemy solution One
/* function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
} */

//my original solution
function reverse(str) {
         var reversedString = '';
        var stringStack = [];
        for (i = 0; i < str.length; i++) {
            stringStack.push(str[i]);
        }

        while (stringStack.length > 0) {
            reversedString = reversedString + stringStack.pop();
        }

        return reversedString;
}

module.exports = reverse;
