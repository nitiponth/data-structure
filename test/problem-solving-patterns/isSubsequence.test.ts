import { expect, test } from "vitest";
import { isSubsequence } from "../../src/problem-solving-patterns/isSubsequence";

test("test isSubsequence by 'hello', 'hello world'", () => {
  expect(isSubsequence("hello", "hello world")).toBe(true);
});
test("test isSubsequence 'sing', 'sting'", () => {
  expect(isSubsequence("sing", "sting")).toBe(true);
});
test("test isSubsequence by 'abc', 'abracadabra'", () => {
  expect(isSubsequence("abc", "abracadabra")).toBe(true);
});
test("test isSubsequence by 'abc', 'acb'", () => {
  expect(isSubsequence("abc", "acb")).toBe(false);
});
test("test isSubsequence by '', 'acb'", () => {
  expect(isSubsequence("", "acb")).toBe(true);
});
test("test isSubsequence by 'abc', ''", () => {
  expect(isSubsequence("abc", "")).toBe(false);
});
test("test isSubsequence by '', ''", () => {
  expect(isSubsequence("", "")).toBe(true);
});
