const arr = [1,2,3,1,1,1,1,3,3];

function longestSubArrayWithKSum(arr,k){
    let n = arr.length;
    let left =0; let right =0;
    
    let maxLength = 0;
    let sum = arr[0];

    while(right<n){
        
        while( sum > k && left <= right   ){
            sum -= arr[left];
            left++;
        }
        
        right++;
        if(right < n){
            sum += arr[right]
        }

        
        if(sum == k){
            maxLength = Math.max(maxLength, right-left+1)
        }

    }
    return maxLength;
}

const result = longestSubArrayWithKSum(arr,6);
console.log('result >>>',result);