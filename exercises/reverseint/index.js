// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Udemy solution one
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

//my solution
// function reverseInt(n) {
//     let isPositive = Math.sign(n) === 1;
//     let reversedNumber = parseInt(n.toString().split('').reverse().join(''));

//     if (!isPositive && n !== 0) {
//         reversedNumber *= -1;
//     }

//     return reversedNumber;
// }

reverseInt(-500);

module.exports = reverseInt;
