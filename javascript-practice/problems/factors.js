// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.
//
function factors(num) {
    let factor = [];
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            factor.push(i);
            console.log(num)
            console.log(i)
        }
    }
    console.log(factor)
    return factor;
}

console.log(factors(10));
console.log(Math.floor(13/2))