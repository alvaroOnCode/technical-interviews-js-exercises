/**
 * Guess the output
 */

let age = 23;
const arr = ["John", age, age += 10, age -= 1, age - 1, undefined];
console.log(arr);

arr.length = 2;
console.log(arr);

delete arr[3];
console.log(arr.length)

delete arr[0];
console.log(arr);
console.log(arr.length);

arr[6] = "Sam";
console.log(arr);

// Solution

// Line 7: ["John", 23, 33, 32, 31, undefined]

// Line 10: ["John", 23]

// ⚠️ Line 12: return true but it doesn't modify arr

// Line 13: 2

// Line 16: [empty, 32]
// Line 17: 2

// Line 20: [empty, 23, empty, empty, empty, empty, "Sam"]
