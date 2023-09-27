import { expect, test } from "vitest";
import { reverse } from "../../src/recursion/reverse";

test("testing reverse function by 'awesome'", () => {
  expect(reverse("awesome")).toBe("emosewa");
});
test("testing reverse function by 'rithmschool", () => {
  expect(reverse("rithmschool")).toBe("loohcsmhtir");
});
