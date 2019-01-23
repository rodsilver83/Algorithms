const subarray = require('./index.js');

test('subarray function exists', () => {
  expect(typeof subarray).toEqual('function');
});

test('given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8]', () => {
  expect(subarray([10, 5, 2, 7, 8, 7],3)).toEqual([10, 7, 8, 8]);
});

