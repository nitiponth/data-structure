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
  const lowerCaseInput = input.toLowerCase(); // O(n)

  const obj = {};

  for (const char of lowerCaseInput) {
    if (char in obj) obj[char]++;
    else obj[char] = 1;
  }

  return obj;
};

exports.validAnagram;
