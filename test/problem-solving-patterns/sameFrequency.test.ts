import { test, expect } from "vitest";
import { sameFrequency } from "../../src/problem-solving-patterns/sameFrequency";

test("test sameFrequency by 182,281", () => {
  expect(sameFrequency(182, 281)).toBe(true);
});
test("test sameFrequency by 34,14", () => {
  expect(sameFrequency(34, 14)).toBe(false);
});
test("test sameFrequency by 3589578, 5879385", () => {
  expect(sameFrequency(3589578, 5879385)).toBe(true);
});
test("test sameFrequency by22,222", () => {
  expect(sameFrequency(22, 222)).toBe(false);
});
