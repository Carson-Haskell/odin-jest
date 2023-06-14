const calculator = require("../scripts/calculator");

describe("test calculator functionality", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("subtracting 2 - 1 should return 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test("diving 4 / 2 should return 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
