const arr = [2,10,5,45,7,2,181,20,15];

function highestElement(arr){
    let n = arr.length;
     let highestIndex = 0;   
    for(let i =0; i<n; i++){
        if(arr[i]>arr[highestIndex]){
            highestIndex = i
        }
    }

    return arr[highestIndex]
}
const result =  highestElement(arr);
console.log('Result >>>',result)