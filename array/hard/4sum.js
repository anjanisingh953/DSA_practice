const arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5] ;
const target = 8 ;

function fourSum(arr,target){
    arr.sort((a,b)=>a-b);
    let n = arr.length;
    let final_arr = [];

    for(let i=0; i<n ; i++){

      if(i>0 && arr[i] == arr[i-1]) continue;
      
      for(let j = i+1; j<n ; j++){
        if( j != i+1 && arr[j] == arr[j-1]) continue;
        
         let k = j+1 ;
         let l = n-1 ;

         while(k<l){
            let sum = arr[i] + arr[j] + arr[k] + arr[l];


            if(sum < target){
                k++;
            }else if(sum > target){
                l--
            }else{
                let temp_arr = [arr[i], arr[j], arr[k], arr[l]];
                final_arr.push(temp_arr);
                k++;
                l--;
                while(k<l && arr[k] == arr[k-1]) k++;
                while(k<l && arr[l] == arr[l+1]) l--;       
            }


         }

      }
    }

    return final_arr;
}

const result = fourSum(arr,target);
console.log('result >>>>',result);
