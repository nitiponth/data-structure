import { expect, test } from "vitest";
import { recursiveRange } from "../../src/recursion/recursiveRange";

test("testing recursiveRange function by 6", () => {
  expect(recursiveRange(6)).toBe(21);
});
test("testing recursiveRange function by [1,2,3,10]", () => {
  expect(recursiveRange(10)).toBe(55);
});
