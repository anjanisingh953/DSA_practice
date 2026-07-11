const arr = [1, 0, 2, 3,2,0,0,4,5,1];

//Put the left first element to the last(right)
function moveAllZeroToEnd(arr) {
    let n = arr.length;


    for(let i=0; i<n-1; i++){

        if(arr[i] == 0 && arr[i+1] !=0){
            let temp = arr[i]
            arr[i] = arr[i+1];
            arr[i+1] = temp
        }


    }
    return arr;
}

const result = moveAllZeroToEnd(arr);
console.log('result >>>>', result)