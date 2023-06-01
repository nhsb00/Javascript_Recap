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

    for (let num of numbers) {
        if (sumPossible(amount - num, numbers) === true) {
            return true;
        }
    }

    return false;
}