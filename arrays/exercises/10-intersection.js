/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
export function intersection(...args) {
  /*
  const allArrays = [[...arr1], [...arr2], [...arr3]];
  return allArrays.reduce((p, c) => p.filter((e) => c.includes(e)));
  */
  const allArrays = [...args];
  return allArrays.reduce((p, c) => p.filter((e) => c.includes(e)));
}
