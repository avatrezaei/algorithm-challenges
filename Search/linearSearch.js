/**
 * Linear Search is a searching algorithm that checks each element of the list in a sequence 
 * until a match is found or the whole list has been searched.
 */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

console.log(linearSearch([2, 6, 7, 20, 34, 50], 20)); // Output: 3
console.log(linearSearch([2, 6, 7, 20, 34, 50], 51)); // Output: -1
