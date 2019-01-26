const pi = require('./index.js');

test('pi function exists', () => {
  expect(typeof pi).toEqual('function');
});

test('pi return 3.141', () => {
  expect(pi().toEqual(3.141);
});

