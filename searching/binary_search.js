const  arr = [-1,0,3,5,9,12];
const target = 9;

function binarySearch(arr, low, high, target) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } 
    else if (target > arr[mid]) {
        return binarySearch(arr, mid + 1, high, target);
    }

    return binarySearch(arr, low, mid - 1, target);
}

var search = function(arr, target) {
    return binarySearch(arr, 0, arr.length - 1, target);
};


const result = search(arr,target);
console.log('result >>>', result);