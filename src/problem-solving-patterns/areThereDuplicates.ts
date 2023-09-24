export const areThereDuplicates = (...args: Array<string | number>) => {
  //O(n)
  const argObj = args.reduce((acc: Record<string | number, number>, curr) => {
    acc[curr] = acc[curr] + 1 || 1;

    return acc;
  }, {});

  return Object.values(argObj).some((val) => val > 1); //O(n)
};

export const areThereDuplicatesByMultiplePointer = (
  ...args: Array<string | number>
) => {
  args.sort();

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};
