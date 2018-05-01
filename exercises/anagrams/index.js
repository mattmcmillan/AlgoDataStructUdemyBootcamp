// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//solution two
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^A-Z0-9]/ig, "").toLowerCase().split('').sort().join('');
}

//solution one
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length!== Object.keys(bCharMap).length){
//         return false;
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char]!==bCharMap[char]){
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^A-Z0-9]/ig, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

//my solution
// function anagrams(stringA, stringB) {
//     const stringAClean = stringA.replace(/[^A-Z0-9]/ig, "").toLowerCase();
//     const stringBClean = stringB.replace(/[^A-Z0-9]/ig, "").toLowerCase();

//     if (stringAClean.length != stringBClean.length) {
//         return false;
//     }

//     const stringAMap = {};
//     const stringBMap = {};

//     for (let i = 0; i < stringAClean.length; i++) {
//         let stringAChar = stringAClean[i];
//         let stringBChar = stringBClean[i];

//         stringAMap[stringAChar] = stringAMap[stringAChar]+1 || 1;
//         stringBMap[stringBChar] = stringBMap[stringBChar]+1 || 1;
//     }

//     for (let char in stringAMap) {
//         if (stringAMap[char] != stringBMap[char]) {
//             return false;
//         }
//     }

//     return true
// }


module.exports = anagrams;
