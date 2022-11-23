import { isEqualDeep } from '../solutions/08-is-equal-deep';
/**
 * Task description: Write a method that finds all intersections of objects
 * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object<string | number>} firstObj - Object with values of any data types
 * @param {Object<string | number>} secondObj - Object with values of any data types
 * @returns {Object}
*/

export const intersectionDeep = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);

  const arr = {};

  for (let i = 0; i < firstObjKeys.length; i += 1) {
    if (obj1[firstObjKeys[i]] === obj2[firstObjKeys[i]]) {
      arr[firstObjKeys[i]] = obj1[firstObjKeys[i]];
    } else if (Array.isArray(obj1[firstObjKeys[i]]) && Array.isArray(obj2[firstObjKeys[i]])) {
      const isEqualArrays = isEqualDeep(obj1[firstObjKeys[i]], obj2[firstObjKeys[i]]);
      if (isEqualArrays) {
        arr[firstObjKeys[i]] = obj1[firstObjKeys[i]];
      }
    } else {
      const hasIntersection = intersectionDeep(obj1[firstObjKeys[i]], obj2[firstObjKeys[i]]);
      if (Object.keys(hasIntersection).length !== 0) {
        arr[firstObjKeys[i]] = obj1[firstObjKeys[i]];
      }
    }
  }
  return arr;
};

/*
function intersectionDeep(obj1, obj2) {
  const firstObjKeys = Object.keys(obj1);

  const arr = {};

  for (let i = 0; i < firstObjKeys.length; i += 1) {
    if (obj1[firstObjKeys[i]] === obj2[firstObjKeys[i]]) {
      arr[firstObjKeys[i]] = obj1[firstObjKeys[i]];
    } else if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      const isEqualArrays = isEqualDeep(obj1[key], obj2[key]);
      if(isEqualArrays) {
        arr[firstObjKeys[i]] = obj1[firstObjKeys[i]]
      }
    } else {
      console.log('recursion here')
    }
  }
  return arr;
}
*/

/*
export const intersectionDeep = (object1, object2) => {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !intersectionDeep(value1, value2))
    || (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => object != null && typeof object === 'object';
*/
