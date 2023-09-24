import { expect, test } from "vitest";
import { findLongestSubstring } from "../src/problem-solving-patterns/findLongestSubstring";

test("test countUniqueValues by ''", () => {
  expect(findLongestSubstring("")).toBe(0);
});
test("test countUniqueValues by 'thisisawesome'", () => {
  expect(findLongestSubstring("thisisawesome")).toBe(6);
});

test("test countUniqueValues by 'rithmschool'", () => {
  expect(findLongestSubstring("rithmschool")).toBe(7);
});

test("test countUniqueValues by 'thecatinthehat'", () => {
  expect(findLongestSubstring("thecatinthehat")).toBe(7);
});

test("test countUniqueValues by 'bbbbbb'", () => {
  expect(findLongestSubstring("bbbbbb")).toBe(1);
});
test("test countUniqueValues by 'longestsubstring'", () => {
  expect(findLongestSubstring("longestsubstring")).toBe(8);
});
test("test countUniqueValues by 'thisishowwedoit'", () => {
  expect(findLongestSubstring("thisishowwedoit")).toBe(6);
});
