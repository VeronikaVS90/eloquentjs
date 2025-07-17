// a list

// converts an array like [1, 2, 3] into a nested object list
// { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

// converts the nested object list back into an array
function listToArray(list) {
    const array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

// adds a new value to the beginning f the list
function prepend(value, list) {
    return { value: value, rest: list };
}

// returns the element at a given position in the list
function nth(list, n) {
    let current = list;
    for (let i = 0; i < n; i++) {
        if (!current) return undefined;
        current = current.rest;
    }
    return current ? current.value : undefined;
}

// a recursive version of nth
function nthRecursive(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nthRecursive(list.rest, n - 1);
}

let list = arrayToList([1, 2, 3]);
console.log(JSON.stringify(list)); // {"value":1,"rest":{"value":2,"rest":{"value":3,"rest":null}}}

console.log(listToArray(list)); // [1, 2, 3]

let newList = prepend(0, list);
console.log(listToArray(newList)); // [0, 1, 2, 3]

console.log(nth(list, 1)); // 2
console.log(nthRecursive(list, 2)); // 3
