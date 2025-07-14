// bean counting
function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++
        }
    }
    return count;
}
console.log(countChar("Abbb", "b"));

function countBs(string) {
    return countChar(string, "B");
};
console.log(countBs("BBBB"));