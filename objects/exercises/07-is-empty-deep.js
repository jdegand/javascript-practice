/**
 * Task description: Write a method that makes a deep check is an object empty
 * Empty values: '', null, NaN, undefined, [], {}
 * Expected Result: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true
 * Task complexity: 3 of 5
 * @param {?} element - Object with values of any data types
 * @returns {boolean}
 */
export const isEmptyDeep = (element) => {
  if (element === null) {
    return true;
  }
  if (Array.isArray(element)) {
    if (element.length === 0) {
      return true;
    }

    for (let i = 0; i < element.length; i += 1) {
      if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
        || (typeof element[i] === 'string' && element[i] !== '')) {
        return false;
      }
      if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
        return isEmptyDeep(element[i]);
      }
    }
    return true;
  }
  const objectKeys = Object.keys(element);
  if (objectKeys.length === 0) {
    return true;
  }

  for (let i = 0; i < objectKeys.length; i += 1) {
    const value = element[objectKeys[i]];

    if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
        || (typeof value === 'string' && value !== '')) {
      return false;
    }
    if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
      return isEmptyDeep(value);
    }
  }

  return true;
};

/*
  for (const key in element) {
    if (element[key] instanceof Object === true) {
      return isEmptyDeep(element[key]);
    }
    if ((element[key] && element[key].length !== 0) || element[key] !== undefined || element[key] !== 0
    || element[key] !== [] || element[key] !== {}) return false;
  }
  return true;
*/
/*
Object.keys(element).every((i) => !Object.keys(element[i]).length
|| typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
|| (typeof element[i] === 'string' && element[i] !== ''));
*/
/*
  for (const key in element) {
    if (element[key] instanceof Object === true) {
      if (isEmptyDeep(element[key]) === false) return false;
    }
  }
  return true;
*/
