/* For an array of prices P[i]=N where i = length and N = price
* get the maximum revenue of a rod length wheter full or cut by pieces 
*/

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        cache[args] = fn.apply(this, args);
        return cache[args];
    }
}

function cutRods(prices, length) {
    index = length - 1;
    if (index === 0) {
        return prices[index];
    }
    return Math.max( prices[index] , ( cutRods(prices, length - 1) + cutRods(prices, length - 2)));
}

cutRods = memoize(cutRods);

module.exports = cutRods;