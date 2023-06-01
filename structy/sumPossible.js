const sumPossible = (amount, numbers, memo = {}) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === amount) {
                return true
            }
        }
    }
    return false;
}