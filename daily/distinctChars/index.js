/*
Given an integer k and a string s, find the length of the longest substring that
contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct 
characters is "bcb".
*/

function distinctChars(str, k) {
    const kChars = [];
    let longest = '', arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        if(kChars.length < k && kChars.indexOf()) {
            kChars.push(c);
        }
        for(let j = 1; j < str.length - i; j++) {
            
        }
    }
}

module.exports = distinctChars;
