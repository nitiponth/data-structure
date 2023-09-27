/*
    Write a recursive function called reverse which 
    accepts a string and returns a new string in reverse.
 */

export const reverse = (str: string) => {
  if (str.length === 1) return str;

  const char = str[str.length - 1];

  return char.concat(reverse(str.slice(0, -1)));
};
