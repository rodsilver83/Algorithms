/*
Write a function that takes two strings, s1 and s2 and returns the longest 
common subsequence of s1 and s2

'abazdc' 'bacbad' => 'abad'
'aggtab' 'gxtxayb' => 'gtab'




*/

/*
function longestSubsequence(s1, s2) {
    const results = [];
    for(let s1Index = 0; s1Index < s1.length; s1Index++) {
        let s2Index = 0;
        let subsequence = '';
        
        for(let char of s1.slice(s1Index)) {
            const foundIndex = s2.indexOf(char, s2Index);
            if(foundIndex !== -1) {
                subsequence += char;
                s2Index++;
            }
        }
        results.push(subsequence);
    }
    return results.reduce((a,b) => a.length > b.length ? a : b, results[0]);
}
*/

/*
function longestSubsequence(s1, s2) {
    const results = [];
    for(let s1Index = 0; s1Index < s1.length; s1Index++) {
        let s2Index = 0;
        let subsequence = '';
        
        for(let char of s1.slice(s1Index)) {
            for(let j = s2Index; j < s2.length; j++) {
                if(char === s2.charAt(j)) {
                    subsequence += char;
                    s2Index++;
                    break;
                }
            }
        }
        results.push(subsequence);
    }
    return results.reduce((a,b) => a.length > b.length ? a : b, results[0]);
}
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

function longestSubsequence(s1, s2) {
    if(s1.length === 0 || s2.length === 0) {
        return '';
    }
    if(s2.charAt(0) === s1.charAt(0)) {
        return s2.charAt(0) + longestSubsequence(s1.slice(1),s2.slice(1));
    }
    return findMax( longestSubsequence(s1.slice(1), s2) , longestSubsequence(s1 , s2.slice(1)) );
}

function findMax(s1, s2) {
    return s1.length > s2.length ? s1 : s2;
}

longestSubsequence = memoization(longestSubsequence);

module.exports = longestSubsequence;
