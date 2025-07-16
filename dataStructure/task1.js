// range
function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(1, 10));

// sum
function sum(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result.reduce((total, num) => total+num, 0);
}

console.log(sum(1, 10))

// step
function step(start, end, step) {
    const result = [];
    if (step > 0) {
       for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else if (step<0) {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
} else {
     for (let i = start; i <= end; i++) {
        result.push(i);
    }
    }
    return result;
}

console.log(step(10,1,-2))