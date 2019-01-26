const longestSubsequence = require('./index.js');
const alllongestSubsequence = require('./allindex.js');


test('longestSubsequence function exists', () => {
  expect(typeof longestSubsequence).toEqual('function');
});

test('alllongestSubsequence function exists', () => {
  expect(typeof alllongestSubsequence).toEqual('function');
});

test('longestSubsequence return abad', () => {
  expect(longestSubsequence('abazdc','bacbad')).toEqual('abad');
});

test('longestSubsequence return gtab', () => {
  expect(longestSubsequence('aggtab','gxtxayb')).toEqual('gtab');
});

// Output: BCAB, BCBA, BDAB
test('alllongestSubsequence return ABCBDAB', () => {
  expect(alllongestSubsequence('ABCBDAB','BDCABA')).toEqual(['BCAB','BCBA','BDAB']);
});

