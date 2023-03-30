const isPrime = (num) => {
    if (num < 2) return false;

    for  (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (n % i === 0) return false;
    }

    return true;
}

// n = input number
// Time: O(square_root(n))
// Space: O(1)

console.log(isPrime(2));