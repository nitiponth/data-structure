/*
 Write a recursive function called flatten 
 which accepts an array of arrays 
 and returns a new array with all values flattened.
*/

type NestedArray<T> = Array<T> | Array<NestedArray<T>>;
export const flatten = (arr: NestedArray<unknown>): unknown[] => {
  let tmp: unknown[] = [];

  for (const elem of arr) {
    if (Array.isArray(elem)) tmp = tmp.concat(flatten(elem));
    else tmp.push(elem);
  }

  return tmp;
};
