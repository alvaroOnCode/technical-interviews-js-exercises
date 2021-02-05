/**
 * Swap these numbers without using a temporary variable.
 */

var a = 5;
var b = 3;

// Solution 1

a = a + b;
b = a - b;
a = a - b;

// Solution 2

[a, b] = [b, a];

// Debug
console.log(a, b);
