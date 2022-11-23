/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
export const fill = (arraySize, value) => {
  const arr = [];
  for (let i = 0; i < arraySize; i += 1) {
    arr.push(value);
  }
  return arr;
};
