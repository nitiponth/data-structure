import { test, expect } from "vitest";
import { maxSubarraySum } from "../../src/problem-solving-patterns/maxSubarraySum";

test("test maxSubarraySum by [100,200,300,400] with size equals 2)", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});
test("test maxSubarraySum by [1,4,2,10,23,3,1,0,20] with size equals 4)", () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});
test("test maxSubarraySum by [-3, 4, 0, -2, 6, -1] with size equals 2)", () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});
test("test maxSubarraySum by [3,-2,7,-4,1,-1,4,-2,1] with size equals 2)", () => {
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
});
test("test maxSubarraySum by [2,3] with size equals 3)", () => {
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});
