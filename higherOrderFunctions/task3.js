// everything
// using a loop
function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

// using the some method
function every(array, test) {
    return !array.some(element => !test(element));
}