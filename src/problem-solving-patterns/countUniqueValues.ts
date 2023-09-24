// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

export const countUniqueValues = (arr: number[]) => {
  if (!arr.length) return 0;

  let uniqueCount = 0;

  for (const index in arr) {
    if (arr[index] !== arr[uniqueCount]) {
      uniqueCount++;
      arr[uniqueCount] = arr[index];
    }
  }

  return uniqueCount + 1;
};
