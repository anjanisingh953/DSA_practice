const arr = [2,3,-2,4];

function getSubArray_OF_MaximumProduct(arr){
    let prefix = 1;
    let suffix = 1;
    let ans = arr[0];
    let n = arr.length;

    for(let i=0; i<n; i++){
        if(prefix == 0) prefix =1;
        if(suffix == 0) suffix=1;
        prefix = prefix * arr[i];
        suffix = suffix * arr[n-i-1];
        ans = Math.max(ans,Math.max(prefix,suffix));
    }
    return ans;

};

const result = getSubArray_OF_MaximumProduct(arr);
console.log('result >>>', result);