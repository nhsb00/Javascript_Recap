// const fib = (n) => {
//     if (n === 0 || n === 1) return n;

//     return fib(n - 1) + fib(n - 2);
// };


const fib = (n, memo = {}) => {
    // todo
    //   if (n in memo) return memo[n]
    // if (n === 0 || n === 1) return n;

    //   memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    //   return memo[n]
    if (n in memo) return memo[n]
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
};


console.log(fib(1));
console.log(fib(3));
console.log(fib(5));
console.log(fib(9));
console.log(fib(46));

