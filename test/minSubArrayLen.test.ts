import { test, expect } from "vitest";
import { minSubArrayLen } from "../src/problem-solving-patterns/minSubArrayLen";

test("test minSubArrayLen by [2,3,1,2,4,3] and sum equals 7, it should return 2 because [4,3] is the smallest subarray", () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});
test("test minSubArrayLen by [2,1,6,5,4] and sum equals 9, it should return 2 because [5,4] is the smallest subarray", () => {
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
});
test("test minSubArrayLen by [3,1,7,11,2,9,8,21,62,33,19] and sum equals 52, it should return 1 because [62] is greater than 52 is the smallest subarray", () => {
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
});
test("test minSubArrayLen by [1,4,16,22,5,7,8,9,10] and sum equals 39", () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
});
test("test minSubArrayLen by [1,4,16,22,5,7,8,9,10] and sum equals 55", () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
});
test("test minSubArrayLen by [4, 3, 3, 8, 1, 2, 3] and sum equals 11", () => {
  expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
});
test("test minSubArrayLen by [1,4,16,22,5,7,8,9,10] and sum equals 95", () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});
