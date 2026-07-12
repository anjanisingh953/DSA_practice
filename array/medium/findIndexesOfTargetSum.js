const arr = [2, 5, 6, 8, 11];
const target = 14;

//If array is already sorted, it is optimal solution
function findIndexes(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
}

console.log(findIndexes([2,5,6,8,11],14));


//If array is sorted or non-sorted in both condition below brute force code will work
    // function findIndexes(arr,target){
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if (arr[i] + arr[j] === target) {
    //                 return [i, j];
    //             }
    //         }
    //     }

    //     return [];
    // }

const result = findIndexes(arr, target);
console.log('result >>>', result);
