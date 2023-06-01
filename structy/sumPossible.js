const sumPossible = (amount, numbers) => {
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = 0; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === amount) {
    //             return true
    //         }
    //     }
    // }
    // return false;
    // double loop is not working because there is possible to loop mroe times

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

console.log(sumPossible(8, [5, 12, 4]))
console.log(sumPossible(15, [6, 2, 10, 19]))
console.log(sumPossible(13, [6, 2, 1]))
console.log(sumPossible(2017, [4, 2, 10]))