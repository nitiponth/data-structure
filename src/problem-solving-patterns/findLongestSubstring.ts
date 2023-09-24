export const findLongestSubstring = (str: string) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, end - start + 1);
    seen[char] = end + 1;
  }

  return longest;
};
