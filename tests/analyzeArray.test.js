const analyzeArray = require("../scripts/analyzeArray");

describe("Array analyzer tests", () => {
  test('passing [1,2, "hello", 3] should return error', () => {
    expect(analyzeArray([1, 2, "hello", 3])).toBe(
      "Error: array must consist of only numbers"
    );
  });

  test("passing [1, 2, 3, 4, 5] should return the average 3", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
  });

  test("passing [1, 2, 3, 4, 5] should return the min 1", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
  });

  test("passing [1, 2, 3, 4, 5] should return the max 5", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
  });

  test("passing [1, 2, 3, 4, 5] should return the length 5", () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
  });

  test("passing [1, 2, 3, 4, 5] should return analyzed object", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
});
