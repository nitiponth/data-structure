const validAnagram = (str: string, toValidateStr: string) => {
  const chars = getCharObject(str); // O(n)
  const toValidateChars = getCharObject(toValidateStr); // O(n)

  if (Object.keys(chars).length !== Object.keys(toValidateChars).length)
    return false;

  // O(n)
  for (const key in chars) {
    if (!(key in toValidateChars)) return false;
    if (chars[key] !== toValidateChars[key]) return false;
  }

  return true;
};

// O(n) (accuracy O(3n))
const getCharObject = (input: string) => {
  return input
    .toLowerCase() // O(n)
    .split("") // O(n)
    .reduce((acc: Record<string, number>, char) => {
      if (char in acc) acc[char]++;
      else acc[char] = 0;

      return acc;
    }, {}); // O(n)
};
