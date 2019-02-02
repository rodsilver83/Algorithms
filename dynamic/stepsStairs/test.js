const stepsStairs = require('./index.js');

test('stepsStairs function exists', () => {
  expect(typeof stepsStairs).toEqual('function');
});

test('stepsStairs(1) returns 1', () => {
  expect( stepsStairs(1) ).toEqual( 1 );
});

test('stepsStairs(2) returns 2', () => {
  expect( stepsStairs(2) ).toEqual( 2 );
});

test('stepsStairs(3) returns 3', () => {
  expect( stepsStairs(3) ).toEqual( 3 );
});

test('stepsStairs(20) returns 10946', () => {
  expect( stepsStairs(20) ).toEqual( 10946 );
});