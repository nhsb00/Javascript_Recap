// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.

function median (nums) {
    const mid = Math.floor(nums.length/2);

    if (nums.length % 2 !== 0) {
        return nums[mid];
    } else {
        return (nums[mid] +nums[mid-1])/2;
    }

}