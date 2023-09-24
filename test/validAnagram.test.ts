import { expect, test } from "vitest";
import { validAnagram } from "../src/problem-solving-patterns/validAnagram";

test("test validAnagram by empty string", () => {
  expect(validAnagram("", "")).toBe(true);
});
test("test validAnagram by 'aaz', 'zza'", () => {
  expect(validAnagram("aaz", "zza")).toBe(false);
});
test("test validAnagram by 'anagram', 'nagaram'", () => {
  expect(validAnagram("anagram", "nagaram")).toBe(true);
});
test("test validAnagram by 'rat','car'", () => {
  expect(validAnagram("rat", "car")).toBe(false);
});
test("test validAnagram by 'awesome', 'awesom')", () => {
  expect(validAnagram("awesome", "awesom")).toBe(false);
});
test("test validAnagram by 'amanaplanacanalpanama', 'acanalmanplanpamana'", () => {
  expect(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")).toBe(
    false
  );
});
test("test validAnagram by 'qwerty', 'qeywrt'", () => {
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
});
test("test validAnagram by 'texttwisttime', 'timetwisttext'", () => {
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});
