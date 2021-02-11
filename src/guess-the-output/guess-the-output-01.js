/**
 * Guess the output
 */

const arr1 = [1];
const arr2 = [2, 3];

arr1.concat(arr2);

console.log('arr1:', arr1);

/**
 * Solution:
 *
 * The output is [1] because 'concat' returns a new array but originals are not modified.
 */
