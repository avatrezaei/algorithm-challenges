/**
 * Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot 
 * and partitions the given array around the picked pivot. It uses a 
 * recursive method to sort the partitions.
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        // Sort the left partition
        quickSort(arr, left, partitionIndex - 1);
        // Sort the right partition
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot],
        partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
            partitionIndex++;
        }
    }
    [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]];
    return partitionIndex;
}

console.log(quickSort([11, 8, 14, 3, 6, 2, 7])); // [2, 3, 6, 7, 8, 11, 14]
