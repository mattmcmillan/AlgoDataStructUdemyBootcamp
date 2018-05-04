// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if(cache[args]){
            return cache[args];
        }

        const result = fn(...args);
        cache[args] = result;

        return result;
    };
}

//solution two - recursive with memoization
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

fib = memoize(fib);

//solution one - iterative
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i<=n; i++){
//         const a = result[i-1];
//         const b = result[i-2];

//         result.push(a+b);
//     }

//     return result[n];
// }

//my solution
// function fib(n) {
//     let resultArray = [0, 1, 1];

//     if (n < 3) {
//         return resultArray[n];
//     }

//     for (let i = 3; i <= n; i++) {
//         resultArray[i] = resultArray[i-1] + resultArray[i-2];
//     }

//     return resultArray[n];
// }

module.exports = fib;
