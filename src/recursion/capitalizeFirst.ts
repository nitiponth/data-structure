/*
    Write a recursive function called capitalizeFirst.
     Given an array of strings, 
     capitalize the first letter of each string in the array.
*/

export const capitalizeFirst = (arr: string[]) => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substring(1)];
  }

  const res: string[] = capitalizeFirst(arr.slice(0, -1));

  const lastElement = arr[arr.length - 1];
  const updatedString = lastElement[0].toUpperCase() + lastElement.substring(1);

  res.push(updatedString);
  return res;
};
