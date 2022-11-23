/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
export const flatten = (arr) => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten)
  ? flatten(toFlatten) : toFlatten), []);
  /*

  // problem when it goes to third level

  const newArr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < newArr.length; i += 1) {
    if (Array.isArray(newArr[i])) {
      newArr.splice(i, 1, ...newArr[i]);
    }
  }
  return arr;
*/
