const distinctChars = require('./index.js');

test('distinctChars function exists', () => {
  expect(typeof distinctChars).toEqual('function');
});

test('distinctChars return bcb', () => {
  expect(distinctChars('abcba')).toEqual('bcb');
});

