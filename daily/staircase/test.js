const staircase = require('./index.js');

test('staircase function exists', () => {
  expect(typeof staircase).toEqual('function');
});

test('staircase N 4 return', () => {
  expect(staircase(4)).toEqual([
    [1, 1, 1, 1],
    [2, 1, 1],
    [1, 2, 1],
    [1, 1, 2],
    [2, 2]]);
});

