/**
 * Swap these numbers without using a temporary variable.
 */

let a = 5;
let b = 3;

// Solution 1

a += b;
b = a - b;
a -= b;

// Solution 2

[a, b] = [b, a];

// Debug
console.log(a, b);
