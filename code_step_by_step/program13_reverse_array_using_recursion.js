let arr = [1,25,30,7,5,12,18,10];
let temp;

function customReverse(arr,start,end){

    if(start<=end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        customReverse(arr,start+1,end-1)
    }
 
}

customReverse(arr,0,arr.length-1)
console.log(arr)