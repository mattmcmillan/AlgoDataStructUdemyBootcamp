// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Udemy solution two
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - 1 -i];
    });
}

//Udemy solution one
// function palindrome(str) {
//    const reversed = str.split('').reverse().join('');
//    return str === reversed;
// }

//my original solution
// function palindrome(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     for (var i = 0; i < str.length; i++) {
//         if(reversed[i]!= str[i]){
//             return false;
//         }
//     }

//     return true;
// }

palindrome("papas");

module.exports = palindrome;
