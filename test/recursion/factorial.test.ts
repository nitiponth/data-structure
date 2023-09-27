import { test, expect } from "vitest";
import { power } from "../../src/recursion/power";
import { factorial } from "../../src/recursion/factorial";

test("testing factorial function by 1", () => {
  expect(factorial(1)).toBe(1);
});
test("testing factorial function by 2", () => {
  expect(factorial(2)).toBe(2);
});
test("testing factorial function by 3", () => {
  expect(factorial(4)).toBe(24);
});
test("testing factorial function by 4", () => {
  expect(factorial(7)).toBe(5040);
});
