// Write a function called isSubsequence
// which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

export const isSubsequence = (str: string, toCheckStr: string) => {
  if (!str.length) return true;

  let pointerIndex = 0;

  for (const char of toCheckStr) {
    if (char === str[pointerIndex]) {
      if (++pointerIndex === str.length) return true;
    }
  }
  return false;
};
