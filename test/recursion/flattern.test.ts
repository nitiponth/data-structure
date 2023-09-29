import { test, expect } from "vitest";
import { flatten } from "../../src/recursion/flatten";

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

test("testing 'flatten' function by [1, 2, 3, [4, 5]]", () => {
  expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("testing 'flatten' function by [1, [2, [3, 4]]", () => {
  expect(flatten([1, [2, [3, 4]]])).toStrictEqual([1, 2, 3, 4]);
});

test("testing 'flatten' function by [[1],[2],[3]]", () => {
  expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3]);
});

test("testing 'flatten' function by [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]]", () => {
  expect(flatten([[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]])).toStrictEqual([
    1, 2, 3,
  ]);
});
