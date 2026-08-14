let arr = [1,3,5,6];
let target = 5

function searchInsertIndex(arr, target) {
  let n = arr.length;
  let low =0; 
  let high= arr.length-1;
  let ans = n;

   while(low<=high){
     let mid = Math.floor((low+high)/2);
      if(arr[mid] >= target){
        ans = mid;
        high = mid-1;
      }else{
        low = mid+1;
      }
   }

   return ans;

};



const result = searchInsertIndex(arr, target);
console.log('result >>>', result);