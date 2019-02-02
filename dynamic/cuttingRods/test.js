const cutRods = require('./index.js');

test('cutRods function exists', () => {
  expect(typeof cutRods).toEqual('function');
});

test('cutRods( [1,5,8,9,10] ) returns 1', () => {
  expect( cutRods([1,5,8,9,10], 1) ).toEqual( 1 );
});

test('cutRods( [1,5,8,9,10] , 2) returns 5', () => {
  expect( cutRods([1,5,8,9,10], 2) ).toEqual( 5 );
});

test('cutRods( [1,5,8,9,10] , ) returns 8', () => {
  expect( cutRods([1,5,8,9,10], 3) ).toEqual( 8 );
});

