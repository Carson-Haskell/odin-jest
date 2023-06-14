const caesarCipher = require("../scripts/caesarCipher");

test('passing "hello" with key 1 should return "ifmmp"', () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});
