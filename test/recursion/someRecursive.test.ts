import { test, expect } from "vitest";
import { someRecursive } from "../../src/recursion/someRecursive";

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val: number) => val % 2 !== 0;

test("testing 'someRecursive' function by [1,2,3,4]", () => {
  expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
});
test("testing 'someRecursive' function by [4,6,8,9]", () => {
  expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
});
test("testing 'someRecursive' function by [4,6,8]", () => {
  expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
});
test("testing 'someRecursive' function by [4,6,8]", () => {
  expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
});
