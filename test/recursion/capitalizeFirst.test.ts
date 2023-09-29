import { expect, test } from "vitest";
import { capitalizeFirst } from "../../src/recursion/capitalizeFirst";

test("testing capitalizeFirst function by ['car','taco','banana']", () => {
  expect(capitalizeFirst(["car", "taco", "banana"])).toStrictEqual([
    "Car",
    "Taco",
    "Banana",
  ]);
});
