const arr = [1,2,3,5,7,9,10,11];
const target = 8;


function lowerBound(arr,target){
 let n = arr.length;
 let low = 0; 
 let high = n-1;
 let ans = n;

 while (low<=high) {
    let mid = Math.floor((low+high)/2);
    
    if(arr[mid]>=target){
        ans = mid;
        high = mid-1;
    }else{
        low = mid + 1;
    }
 }

 return ans;

}

const result = lowerBound(arr,target);
console.log('result >>>',result);
