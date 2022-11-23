/**
 * Task description: Write a method that makes a deep compare of two objects
 * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqualDeep = (firstObj, secondObj) => {
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = firstObj[key];
    const val2 = secondObj[key];

    if (Number.isNaN(val1) && Number.isNaN(val2)) return true;

    const areObjects = isObject(val1) && isObject(val2);

    // NaN === NaN is a problem when comparing val1 and val2
    if ((areObjects && !isEqualDeep(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }
  return true;
};

function isObject(object) {
  return object !== null && typeof object === 'object';
}
