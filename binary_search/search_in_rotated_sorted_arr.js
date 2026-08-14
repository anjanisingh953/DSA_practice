let arr = [4,5,6,7,0,1,2];
let target = 0

function searchInRotatedSortedArray(arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n-1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] == target) return mid;

        if(arr[low] <= arr[mid]){
            if(arr[low] <= target && target <= arr[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
           if(arr[mid] <= target && target <= arr[high]){
             low = mid + 1;
           }else{
             high = mid - 1;
           } 
        }    

    }

    return -1;
};

let result = searchInRotatedSortedArray(arr,target);
console.log('result >>>', result);