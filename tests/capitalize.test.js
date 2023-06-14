const capitalize = require("../scripts/capitalize");

test('passing "carson" should return "Carson"', () => {
  expect(capitalize("carson")).toBe("Carson");
});
