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

// function pyramid(n) {
//     for(let i = 0; i < n; i++) {
//         let row = '';
//         for(let j = -1 * (n - 1); j < n; j++) {
//             if (Math.abs(j) <= i) {
//                 row += '#';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

function pyramid(n, i = 0,  j = -1 * (n - 1), row = '') {
    if (i === n) {
        return;
    }
    if ( j === n ) {
        console.log(row);
        return pyramid(n, i + 1);
    }
    if (Math.abs(j) <= i) {
        row += '#';
    } else {
        row += ' ';
    }
    pyramid(n, i, j + 1, row);
}

module.exports = pyramid;
