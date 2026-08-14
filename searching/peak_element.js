const arr = [1,10,13,7,6,5,4,3,2,1,0];

function peakElement(arr){
    let n = arr.length;
    if(n==1) return 0;
    if(arr[0]>arr[1]) return 0;
    if(arr[n-1] > arr[n-2]) return n-1;

    let low = 1;
    let high = n-2;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid]> arr[mid-1] && arr[mid]>arr[mid-1]){
            return mid;
        }

        else if(arr[mid] > arr[mid-1]) {
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;  
}

const result = peakElement(arr);
console.log('result >>>',result);