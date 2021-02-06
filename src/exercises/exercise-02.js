/**
 * Implement a sort function.
 */

function sort(array) {
  // Solution
  const result = [];

  while (array.length > 0) {
    const min = Math.min(...array);
    const index = array.findIndex((val) => val === min);
    result.push(...array.splice(index, 1));
  }

  return result;
}

// Debug
console.log(sort([14, 22, 8, 99]));
console.log(sort([4, 3, 8, 5]));
console.log(sort([11, 55, -13, 44, 1930, 0, 4, -2, 3]));
console.log(sort([2, -5, 3, 1, 2, -5]));
