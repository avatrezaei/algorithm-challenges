/**
 * Merge Sort is an efficient, stable sorting algorithm that works on the principle of 
 * Divide and Conquer. It divides the input array into two halves, calls itself for 
 * the two halves, and then merges the two sorted halves.
 */

function merge(left, right){
    let arr = [];
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift());  
        } else {
            arr.push(right.shift()); 
        }
    }
    
    // Concatenating the leftover elements
    return [ ...arr, ...left, ...right ];
}
    
function mergeSort(array) {
    const half = array.length / 2;
    
    // Base case or terminating case
    if(array.length < 2){
      return array; 
    }
    
    const left = array.splice(0, half); 
    return merge(mergeSort(left),mergeSort(array));
}

console.log(mergeSort([10, 5, 2, 3]));  // [2, 3, 5, 10]
