const arr = [4,6,2,5,8,7,9,1,3];

function doPartition(arr, low, high){
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j){
        while(arr[i] <= pivot && i<=high-1){
            i++;
        }
 
        while(arr[j] > pivot && j >= low+1){
            j--;
        }
         if( i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
         }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;

}


function quick_sort(arr,low,high){
    if(low<high){
        
        let partitionIndex = doPartition(arr,low,high);
       
        //For left   
        quick_sort(arr, low, partitionIndex-1);
       
        //For right
        quick_sort(arr, partitionIndex+1, high);
    }
    return arr;
}

const result = quick_sort(arr,0,arr.length-1)
console.log('result >>>',result);
