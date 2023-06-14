const reverse = require("../scripts/reverse");

test('passing "carson" should return "nosrac"', () => {
  expect(reverse("carson")).toBe("nosrac");
});
