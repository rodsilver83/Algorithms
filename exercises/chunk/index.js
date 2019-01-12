// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunks = [];
//     array.forEach( (item, index) => {
//         let chunkIndex = Math.floor(index / size);
//         if(!chunks[chunkIndex]) {
//             chunks[chunkIndex] = [];
//         }
//         chunks[chunkIndex].push(item);
//     });
//     return chunks;
// }

function chunk(array, size) {
    let index = 0;
    let chunks = [];
    while(index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }
    return chunks;
}

module.exports = chunk;
