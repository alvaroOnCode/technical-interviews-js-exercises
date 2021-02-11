/**
 * Guess the output
 */

let age = 23;
const arr = ["John", age, age += 10, age -= 1, age - 1, undefined];
console.log(arr);         // 0️⃣7️⃣

arr.length = 2;
console.log(arr);         // 1️⃣0️⃣

delete arr[3];            // 🤔🤔
console.log(arr.length);  // 1️⃣3️⃣

delete arr[0];
console.log(arr);         // 1️⃣6️⃣
console.log(arr.length);  // 1️⃣7️⃣

arr[6] = "Sam";
console.log(arr);         // 2️⃣0️⃣

// Solution

// 0️⃣7️⃣ 👉 ["John", 23, 33, 32, 31, undefined]

// 1️⃣0️⃣ 👉 ["John", 23]

// 🤔🤔 👉 returns 'true' but it doesn't modify arr
// 1️⃣3️⃣ 👉 2

// 1️⃣6️⃣ 👉 [empty, 32]
// 1️⃣7️⃣ 👉 2

// 2️⃣0️⃣ 👉 [empty, 23, empty, empty, empty, empty, "Sam"]
