const isPrime = (num) => {
    if (num < 2) return false;

    for  (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// n = input number
// Time: O(square_root(n))
// Space: O(1)

const primeNums = (num) => {
    let primeNum = [];
    for (let i = 2; i < num; i += 1) {
        if (isPrime(i)) {
            primeNum.push(i);
        }
    }

    return primeNum;
}

console.log(primeNums(2));
console.log(primeNums(3));
console.log(primeNums(13));
console.log(primeNums(100));
