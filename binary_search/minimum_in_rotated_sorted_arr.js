const arr = [4,5,7,2,3];

function minimumInRotatedArr(arr){
    let n = arr.length;
    let low = 0;
    let high = n-1; 
    let ans = Infinity;

    while(low <= high){
        let mid = Math.floor((low+high)/2);

        if(arr[low]<=arr[high]){
            ans = Math.min(ans,arr[low]);
            break;
        }

        if(arr[low] <=  arr[mid]){
            ans = Math.min(ans,arr[low]);
            low = mid +1;
        }else{
            ans = Math.min(ans,arr[mid]);
            high = mid - 1;
        }

    }

    return ans;

}

const result = minimumInRotatedArr(arr);
console.log('result >>>',result);