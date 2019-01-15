// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
    for(let i = 0; i < n; i++) {
        result[i] = [];
    }
    let startRow = 0, 
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1,
    count = 1,
    countEnd = n*n;
    
    while(count <= countEnd) {
        // Top Row
        for(let i = startCol; i <= endCol; i++) {
            result[startRow][i] = count++;
        }
        startRow++;
        // Right Column
        for(let j = startRow; j <= endRow; j++) {
            result[j][endCol] = count++;
        }
        endCol--;
        // Bottom Row
        for(let k = endCol; k >= startCol; k--) {
            result[endRow][k] = count++;
        }
        endRow--;
        // Left Column
        for(let l = endRow; l >= startRow; l--) {
            result[l][startCol] = count++;
        }
        startCol++;
    }
    
    return result;
}

module.exports = matrix;
