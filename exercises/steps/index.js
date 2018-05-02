// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution two
function steps(n, row = 0, stair = '') {
    if(n===row){
        return;
    }
    if(n===stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    if(stair.length<=row){
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
}

//solution one
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }

//my solution
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         let consoleOut = '';
//         for(let j = 0; j < n; j++){
//             if(j<i){
//                 consoleOut += '#';
//             } else {
//                 consoleOut+= ' ';
//             }
//         }
//         console.log(consoleOut);
//     }
// }

module.exports = steps;
