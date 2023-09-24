export const validAnagram = (str: string, toValidateStr: string) => {
  if (str.length !== toValidateStr.length) return false;

  const charObj = getCharObject(str); // O(n)

  // O(n)
  for (const char of toValidateStr) {
    if (!charObj[char]) return false;
    charObj[char]--;
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
      else acc[char] = 1;

      return acc;
    }, {}); // O(n)
};

validAnagram("", "");
validAnagram("aaz", "zza");
validAnagram("anagram", "nagaram");
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana");
validAnagram("qwerty", "qeywrt");
validAnagram("texttwisttime", "timetwisttext");

exports.validAnagram;
