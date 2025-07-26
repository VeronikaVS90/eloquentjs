// your own loop
function loop(initialValue, test, update, body) {
    for (let value = initialValue; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);