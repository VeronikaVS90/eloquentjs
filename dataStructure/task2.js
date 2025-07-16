// reversing an array
function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
console.log(reverseArray([10, 5, 7, 3, 8]))

function reverseArrayInPlace(array) {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
    }
    return array;
}

console.log(reverseArrayInPlace([5,7,9,11]))
