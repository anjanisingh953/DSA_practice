const arr = [1,2,5,9];
const threshold = 6;

function sumByDivisorTotal(arr,divisor){
        let sum = 0;
        let n = arr.length;

        for(let i =0; i<n; i++){
            sum += Math.ceil( arr[i] / divisor );
        }
        return sum;
}

function findSmallestDivisor(arr,maximumSum){
    let maxi = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++){
        maxi = Math.max(maxi,arr[i]);
    }
    
    let low = 1 ; let high = maxi;
    let ans = 1;

    while(low <= high){
        let mid = Math.floor((low+high)/2);

        if(sumByDivisorTotal(arr,mid) <= maximumSum){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans

    

}

const result = findSmallestDivisor(arr,threshold);
console.log('result >>>',result);
