/*
    Given an array of integers and a number, write a function called maxSubarraySum, 
    which finds the maximum sum of a subarray with the length of the number passed to the function.
    
    Note that a subarray must consist of consecutive elements from the original array.
    In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

export const maxSubarraySum = (arr: number[], size: number) => {
  if (!arr.length) return null;
  if (!size) return null;
  if (arr.length < size) return null;

  let maxResult = arr.slice(0, size).reduce((acc, curr) => acc + curr, 0);
  let temp = maxResult;

  for (let index = size; index < arr.length; index++) {
    const firstElement = arr[index - size];
    const newElement = arr[index];
    temp = temp - firstElement + newElement;

    maxResult = Math.max(temp, maxResult);
  }

  return maxResult;
};
