// Nullish Coalescing: If the value on the left is null or undefined, use the value on the right.
const name = null;
console.log(name ?? "Guest");

let a = undefined;
console.log(a ?? "Default");

let b = null;
console.log(b ?? "Default");

let c = "Ali";
console.log(c ?? "Default");

//Difference between ?? and ||
// || treats any falsy value as needing a fallback.
// Falsy values
/*
false
0
"" (empty string)
NaN
null
undefined
 */

// ?? only falls back when the left side is null or undefined.