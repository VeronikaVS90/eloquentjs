function deepEqual(a, b) {
  if (arguments.length < 2) {
    throw new Error("deepEqual requires two arguments");
  }

  if (a === b) return true;

  if (a === null || typeof a !== "object" ||
      b === null || typeof b !== "object") {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1")); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual({a: 1}, {a: 1})); // true
console.log(deepEqual({a: 1}, {a: 2})); // false
console.log(deepEqual({a: 1, b: 2}, {b: 2, a: 1})); // true
console.log(deepEqual({a: 1, b: 2}, {a: 1})); // false
console.log(deepEqual({a: {b: 2}}, {a: {b: 2}})); // true

