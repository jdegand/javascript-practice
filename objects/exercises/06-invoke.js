/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */
export const invoke = (object, path, func, args) => {
  /*
  const arr = path.split('.');
  const x = object[arr[0]][arr[1]];
  const slice = new Function(func);
  return x.slice(...args);
  */
  const arr = path.split('.');
  const x = object[arr[0]][arr[1]];
  return Array.prototype[func].apply(x, args);
};
