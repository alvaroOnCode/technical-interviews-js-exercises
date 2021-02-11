/**
 * There is an array of 'n' integers called 'num'.
 * 
 * The array can be reduced by 1 element by performing a move.
 * 
 * Each move consists of the following three steps:
 *  - Pick two different elements 'num[i]' and 'num[j]' (i != j).
 *  - Remove the two selected elements from the array.
 *  - Add the sum of the two selected elements to the end of the array.
 * 
 * Each move has a cost associated with it: the sum of the two elements removed from the array during the move.
 * Calculate the minimum total cost of reducing the array to one element.
 * 
 * 👉 Example:
 * const num = [4,6,8];
 * 
 * First, remove 4 and 6 at cost of 4 + 6 = 10, and the resultant array is [8, 10].
 * Then, remove 8 and 10 at cost of 8 + 10 = 18, and the resultant array is [18].
 * And the total cost of reducing this array to one element using this sequence of moves is 10 + 18 = 28.
 * 
 * But this is just one set of possible moves.
 * 
 * For instance, one could have started with 4 and 8.
 * Then, 4 + 8 = 12 and the resultant array would have been [6, 12].
 * Then, 6 + 12 = 18 and the resultant array would have been [18].
 * And the total cost of this example would have been 12 + 18 = 30.
 * 
 * ℹ️ Function Description
 * Complete the function 'reductionCost' which has an array of integers as parameter.
 * 
 * 🙌 Return
 * The function must return an integer: the minimal total cost of reducing the input array to one element.
 * 
 * 📋 Constraints
 * 2 <= n <= 10^4
 * 0 <= num[i] <= 10^5
 */

// Solution
const num = [4, 6, 8];
const num2 = [1, 2, 3];
const num3 = [1, 2, 3, 4];
const num4 = [10, 20, 30, 40, 50, 60];
const num5 = [60, 50, 40, 30, 20, 10];

function reductionCost(array) {
  let cost = 0;

  while (array.length > 1) {
    // First int
    const index1 = array.findIndex((val) => val === Math.min(...array));
    const min1 = array.splice(index1, 1)[0];
    // console.log("min1:", typeof min1, min1);

    // First int
    const index2 = array.findIndex((val) => val === Math.min(...array));
    const min2 = array.splice(index2, 1)[0];
    // console.log("min2:", typeof min2, min2);

    // Sum
    const sum = min1 + min2;
    // console.log('sum:', sum);

    // Add sum to array
    array.push(sum);
    // console.log('array:', array);

    cost += sum;
    // console.log('cost:', cost);

    // console.log('----------');
  }

  return cost;
}

console.log(`👉 The cost of reducing [${num}] is ${reductionCost(num)}`);
console.log('--------------------------------------------------');
console.log(`👉 The cost of reducing [${num2}] is ${reductionCost(num2)}`);
console.log('--------------------------------------------------');
console.log(`👉 The cost of reducing [${num3}] is ${reductionCost(num3)}`);
console.log('--------------------------------------------------');
console.log(`👉 The cost of reducing [${num4}] is ${reductionCost(num4)}`);
console.log('--------------------------------------------------');
console.log(`👉 The cost of reducing [${num5}] is ${reductionCost(num5)}`);
console.log('--------------------------------------------------');
