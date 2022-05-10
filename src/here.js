const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// simplest form of test
let result = sum(3, 7);
let expected = 10;
// eslint-disable-next-line jest/no-standalone-expect
expect(result).toBe(expected);

// Simplest assertion library
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

// node here.js
