const pathSize = require('./index.js');

test('pathSize function exists', () => {
  expect(typeof pathSize).toEqual('function');
});

test('"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" return size 32', () => {
  expect(pathSize('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')).toBe(32);
});

