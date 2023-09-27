import { expect, test } from "vitest";
import { fib } from "../../src/recursion/fib";

test("testing fib function by 4", () => {
  expect(fib(4)).toBe(3);
});
test("testing fib function by 10", () => {
  expect(fib(10)).toBe(55);
});
test("testing fib function by 28", () => {
  expect(fib(28)).toBe(317811);
});
test("testing fib function by 35", () => {
  expect(fib(35)).toBe(9227465);
});
