// Write a function called sameFrequency.
// Given two positive integers,
// find out if the two numbers have the same frequency of digits.

export const sameFrequency = (num: number, othersNumber: number) => {
  if (num.toString().length !== othersNumber.toString().length) return false;

  const numberObj = getNumberObject(num); // O(n)
  const othersNumberStr = othersNumber.toString(); // O(n)

  // O(n)
  for (const iterator of othersNumberStr) {
    if (!numberObj[iterator]) return false;
    numberObj[iterator]--;
  }

  return true;
};

const getNumberObject = (num: number) => {
  const obj = {};
  const str = num.toString(); //O(n)

  // O(n)
  for (const curr of str) {
    obj[curr] = obj[curr] ? obj[curr] + 1 : 1;
  }

  return obj;
};
