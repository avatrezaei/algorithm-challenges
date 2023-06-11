/**
 * Binary Search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item, 
 * until you've narrowed down the possible locations to just one.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target
        } 
        if (arr[mid] < target) {
            left = mid + 1; // Continue search on right half
        } 
        else {
            right = mid - 1; // Continue search on left half
        }
    }

    return -1; // Target not found
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23)); // Output: 5
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 44)); // Output: -1
