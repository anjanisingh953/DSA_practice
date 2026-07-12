const arr = [10 ,20,30,30,45,45,50,60];

function isArraySorted(arr){
    const n = arr.length;

    for(let i =1; i < n; i++){
        if(arr[i]<arr[i-1]) return false;
    }
    
    return true;
}

const result = isArraySorted(arr);

console.log('result >>>>',result);
