import { expect, test } from "vitest";
import { power } from "../../src/recursion/power";

test("testing power function by base is 2 and the exponent is 0", () => {
  expect(power(2, 0)).toBe(1);
});
test("testing power function by base is 2 and the exponent is 4", () => {
  expect(power(2, 2)).toBe(4);
});
test("testing power function by base is 2 and the exponent is 5", () => {
  expect(power(2, 4)).toBe(16);
});
