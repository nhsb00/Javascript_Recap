const sumPossible = (amount, numbers) => {
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = 0; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === amount) {
    //             return true
    //         }
    //     }
    // }
    // return false;

    if (amount === 0) return true;

    if (amount < 0) return false;

    if (amount in memo) return memo[amount];

    for (let num of numbers) {
        if (sumPossible(amount - num, numbers, memo)) {
            return true;
        }
    }
    memo[amount] = false;
    return false;
}