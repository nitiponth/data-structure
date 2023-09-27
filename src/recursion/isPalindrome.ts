/*
    Write a recursive function called isPalindrome
    which returns true if the string passed to it is a palindrome
    (reads the same forward and backward). Otherwise it returns false.
*/

export const isPalindrome = (str: string) => {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1).slice(0, 1));
};
