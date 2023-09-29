/*
    Write a recursive function called someRecursive 
    which accepts an array and a callback.
    The function returns true if a single value in the array
    returns true when passed to the callback. 
    Otherwise it returns false.
*/

export const someRecursive = (
  arr: number[],
  callback: (val: number) => boolean
) => {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;

  return someRecursive(arr.splice(1), callback);
};
