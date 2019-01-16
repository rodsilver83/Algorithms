// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const fibonacci = [0,1]
//     for(let i = 2; i <= n; i++) {
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     return fibonacci[n];
// }

// function fib(n) {
//     let f1 = 0, f2 = 1, temp = 0;
//     for(let i = 2; i <= n; i++) {
//         tmp = f2;
//         f2 += f1;
//         f1 = tmp;
//         debugger;
//     }
//     return f2;
// }

// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// function fib(n, mem = []) {
//     if (n < 2) {
//         return n;
//     }
//     if (mem[n]) {
//         return mem[n];
//     } else {
//         return mem[n] = fib(n - 1, mem) + fib(n - 2, mem);
//     }
// }

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        
        const result = fn.apply(this, args);
        cache[args] = result;
        
        return result;
    }
}

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
