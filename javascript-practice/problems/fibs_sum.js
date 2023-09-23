// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

function fib(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 1) return 1;
    if (n === 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

function fibsSum(n, memo ={}) {
    if (n in memo) return memo[n]
    if (n === 1) return 1;
    if (n === 2) return 2;

    memo[n] = fibsSum(n - 1, memo) + fib(n);
    return memo[n];
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

console.log(fibsSum(2));
console.log(fibsSum(3));
console.log(fibsSum(5));
