//Write a function called averagePair.
//Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the average target.

export const averagePair = (numbers: number[], avg: number) => {
  if (!numbers.length) return false;

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentAvg = (numbers[left] + numbers[right]) / 2;
    if (currentAvg === avg) return true;
    if (currentAvg < avg) left++;
    else right--;
  }

  return false;
};
