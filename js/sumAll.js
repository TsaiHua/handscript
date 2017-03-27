let result = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    let i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(result);
