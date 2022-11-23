/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 */
export const intersection = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);

  const arr = {};

  for (let i = 0; i < firstObjKeys.length; i += 1) {
    if (obj1[firstObjKeys[i]] === obj2[firstObjKeys[i]]) {
      arr[firstObjKeys[i]] = obj1[firstObjKeys[i]];
    }
  }
  return arr;
};
