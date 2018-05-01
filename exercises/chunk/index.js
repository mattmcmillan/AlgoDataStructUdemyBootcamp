// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution two
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, size + index));
        index += size;
    }
    return chunked;
}

//solution one
// function chunk(array, size) {
//     const chunked = [];

//     for(let element of array){
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

//my solution
// function chunk(array, size) {
//     let outputAray = [];
//     let chunkOut = [];
//     let chunkIndex = 0;

//     for (let arrayNum of array) {
//         if (chunkIndex < size) {
//             chunkOut.push(arrayNum);
//             chunkIndex++;
//             if(chunkIndex == size){
//                 outputAray.push(chunkOut.slice());
//                 chunkOut = [];
//                 chunkIndex = 0;
//             }
//         } 
//     }

//     if(chunkOut.length>0){
//         outputAray.push(chunkOut.slice());
//     }

//     return outputAray;
// }

module.exports = chunk;
