const maxValue = (nums) => {
    let max = nums[0];
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}


console.log(maxValue([4, 7, 2, 8, 10, 9]))
console.log(maxValue([10, 5, 40, 40.3]))
console.log(maxValue([-5, -2, -1, -11]))
console.log(maxValue([42]))
console.log(maxValue([1000, 8]))
console.log(maxValue([1000, 8, 9000]))
console.log(maxValue([2, 5, 1, 1, 4]))