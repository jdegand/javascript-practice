/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
export const chunk = (arr, size) => {
  const final = [];
  for (let i = 0; i < arr.length; i += size) {
    const newArr = arr.slice(i, size + i);
    final.push(newArr);
  }
  return final;
};
