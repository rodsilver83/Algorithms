const longestSubsequence = require('./index.js');

test('longestSubsequence function exists', () => {
  expect(typeof longestSubsequence).toEqual('function');
});

test('longestSubsequence return abad', () => {
  expect(longestSubsequence('abazdc','bacbad')).toEqual('abad');
});

test('longestSubsequence return gtab', () => {
  expect(longestSubsequence('aggtab','gxtxayb')).toEqual('gtab');
});

