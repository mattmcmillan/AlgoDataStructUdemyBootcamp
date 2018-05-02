// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//solution two
function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        pyramid(n, row + 1);
        return;
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

//my recursive solution
// function pyramid(n, row = 0, column = 0, level = '') {
//     if (n === row) {
//         return;
//     }
//     if (column === 2 * n - 1) {
//         console.log(level);
//         pyramid(n, row + 1);
//         return;
//     }

//     const midpoint = Math.floor((2 * n - 1) / 2);

//     if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//     } else {
//         level += ' ';
//     }

//     pyramid(n, row, column + 1, level);
// }


//solution one
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }


//my solution
// function pyramid(n) {
//     let columns = (n * 2) - 1;

//     for (let i = 0; i < n; i++) {
//         let level = '';
//         for (let j = 0; j < columns; j++) {
//             let centerIndex = Math.floor(columns/2);
//             let hashSignIndexStart = centerIndex - i;
//             let hashSignIndexEnd = centerIndex + i;
//             if (j >= hashSignIndexStart && j <= hashSignIndexEnd) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

module.exports = pyramid;
