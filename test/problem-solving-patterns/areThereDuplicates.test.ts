import { expect, test } from "vitest";
import {
  areThereDuplicates,
  areThereDuplicatesByMultiplePointer,
} from "../../src/problem-solving-patterns/areThereDuplicates";

test("test areThereDuplicates by 1, 2, 3", () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
});
test("test areThereDuplicates by 1, 2, 2", () => {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});
test("test areThereDuplicates by 'a', 'b', 'c', 'a'", () => {
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});

test("test areThereDuplicates by 1, 2, 3", () => {
  expect(areThereDuplicatesByMultiplePointer(1, 2, 3)).toBe(false);
});
test("test areThereDuplicates by 1, 2, 2", () => {
  expect(areThereDuplicatesByMultiplePointer(1, 2, 2)).toBe(true);
});
test(`test areThereDuplicates by a", "b", "c", "d", 1, 5, 7, 9, "9"`, () => {
  expect(
    areThereDuplicatesByMultiplePointer("a", "b", "c", "d", 1, 5, 7, 9, "9")
  ).toBe(false);
});
test(`test areThereDuplicates by a", "b", "c", "d", 1, 5, 7, 9, 9`, () => {
  expect(
    areThereDuplicatesByMultiplePointer("a", "b", "c", "d", 1, 5, 7, 9, 9)
  ).toBe(true);
});
