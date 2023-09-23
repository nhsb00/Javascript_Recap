// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
//
function binarySearch(arr, target) {
    const midpoint = Math.floor(arr.length / 2);

    if (arr[midpoint] > target) {
        return binarySearch(arr.slice(0, midpoint), target);
    } else if (arr[midpoint] < target) {
        return binarySearch(arr.slice(midpoint + 1));
    } else {
        return midpoint;  
    }
}

function binarySearch(arr, target) {

    let startIndex = 0;
    let endIndex = arr.length - 1;
    let midpoint = Math.floor(arr.length / 2);

    while (startIndex <= endIndex) {
        if (arr[midpoint] > target) {
            startIndex = midpoint + 1;
        } else if (arr[midpoint] < target) {
            endIndex = midpoint - 1;
        } else {
            return midpoint;  
        }
    }
}

