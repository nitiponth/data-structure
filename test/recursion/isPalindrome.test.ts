import { test, expect } from "vitest";
import { isPalindrome } from "../../src/recursion/isPalindrome";

test("testing isPalindrome function by 'awesome", () => {
  expect(isPalindrome("awesome")).toBe(false);
});
test("testing isPalindrome function by 'foobar", () => {
  expect(isPalindrome("foobar")).toBe(false);
});
test("testing isPalindrome function by 'tacocat", () => {
  expect(isPalindrome("tacocat")).toBe(true);
});
test("testing isPalindrome function by 'amanaplanacanalpanama", () => {
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
});
test("testing isPalindrome function by 'amanaplanacanalpandemonium", () => {
  expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
});
