import { expect, test } from "vitest";
import { averagePair } from "../src/problem-solving-patterns/averagePair";

test("test averagePair by [1,2,3] to be 2.5", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});
test("test averagePair [1,3,3,5,6,7,10,12,19] to be 8", () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
});
test("test averagePair by [-1,0,3,4,5,6] to be 4.1", () => {
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
});
test("test averagePair by [] to be 4", () => {
  expect(averagePair([], 4)).toBe(false);
});
