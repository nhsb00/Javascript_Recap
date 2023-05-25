const tribonacci = (n) => {
    if (n === 0 || n === 1) return 0;

    if (n === 2) return 1;

    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

console.log(tribonacci(1));
console.log(tribonacci(3));
console.log(tribonacci(5));
console.log(tribonacci(9));
console.log(tribonacci(35));
console.log(tribonacci(46));

