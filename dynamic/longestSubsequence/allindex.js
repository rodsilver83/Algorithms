/*
Write a function that takes two strings, s1 and s2 and returns the longest 
common subsequence of s1 and s2

'abazdc' 'bacbad' => 'abad'
'aggtab' 'gxtxayb' => 'gtab'




*/

function memoization(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this,args);
        cache[args] = result;
        return result;
    }
}

let results = [];
function alllongestSubsequence(s1, s2) {
    if(s1.length === 0 || s2.length === 0) {
        return '';
    }
    if(s2.charAt(0) === s1.charAt(0)) {
        return s2.charAt(0) + alllongestSubsequence(s1.slice(1),s2.slice(1));
    }
    const max = findMax( alllongestSubsequence(s1.slice(1), s2) , alllongestSubsequence(s1 , s2.slice(1)) );
    if(results.length === 0 || (results[0] && results[0].length === max.length) ) {
        results.push(max);
    } else if (results[0] && results[0].length < max.length) {
        results = [];
        results.push(max);
    }
    // console.log(results);
    return max;
}

function findMax(s1, s2) {
    console.log(s1, s2);
    return s1.length >= s2.length ? s1 : s2;
}

function returnalllongestSubsequence(s1, s2) {
    alllongestSubsequence(s1,s2);
    return results;
}

alllongestSubsequence = memoization(alllongestSubsequence);

module.exports = returnalllongestSubsequence;
