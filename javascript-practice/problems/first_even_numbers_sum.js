// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n===1) return 2;
    
    memo[n] = 2 * n + firstEvenNumbersSum(n - 1, memo);
    return memo[n];
}

console.log(firstEvenNumbersSum(1));
console.log(firstEvenNumbersSum(2));
console.log(firstEvenNumbersSum(3));
console.log(firstEvenNumbersSum(4));
console.log(firstEvenNumbersSum(5));
console.log(firstEvenNumbersSum(6));
