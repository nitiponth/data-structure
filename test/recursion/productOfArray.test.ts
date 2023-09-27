import { expect, test } from "vitest";
import { productOfArray } from "../../src/recursion/productOfArray";

test("testing productOfArray function by [1,2,3]", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
});
test("testing productOfArray function by [1,2,3,10]", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});
