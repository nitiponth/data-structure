/*
    Write a recursive function called fib 
    which accepts a number and returns the nth number in the Fibonacci sequence.
     Recall that the Fibonacci sequence is the sequence 
     of whole numbers 1, 1, 2, 3, 5, 8, ... 
     which starts with 1 and 1, and where every number thereafter is equal to
      the sum of the previous two numbers.
*/

export const fib = (num: number) => {
  if (num === 0) return 0;

  let index = 1;
  const helper = (prev: number, curr: number) => {
    if (index === num) return curr;

    const current = prev + curr;
    index++;

    return helper(curr, current);
  };

  return helper(0, 1);
};

// or it should be
// const fib = (n) => {
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
