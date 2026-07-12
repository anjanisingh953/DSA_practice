

const arr = [0,1,1,0,1,2,1,2,0,0,0];

//Dutch national flag algorithm
function sortArray(arr){
    let n = arr.length;
    let low =0; mid =0; high = n-1;
    
    while(mid<=high){
       
        if(arr[mid] ==0){
            let temp =arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }

        else if( arr[mid] == 1 ){
            mid++;
        }

        // else if( arr[mid] != 1  && arr[mid]==0){
        else{
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] =temp;
            high--;
        }

    }

    return arr;
}

const result = sortArray(arr);
console.log('result >>>>',result);