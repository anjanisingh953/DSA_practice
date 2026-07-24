const arr = [-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2];
const target = 0;

function threeSum(arr,target){

    arr.sort((a,b)=>a-b);
    let n = arr.length;
    let final_arr = [];


    for(let i=0; i< n; i++){
        
        if(i>0 && arr[i] == arr[i-1]) continue;
        let j = i+1 ;
        let k = n-1 ;

        while(j<k){
            let sum = arr[i] + arr[j] + arr[k];
            if(sum < target){
                j++;
            }else if(sum >target){
                k--;
            }else{
                let temp_arr = [arr[i], arr[j], arr[k]];
                final_arr.push(temp_arr);
                j++;
                k--;
                while(j<k && arr[j] == arr[j-1]) j++;
                while(j<k && arr[k] == arr[k+1]) k--;
            }
        }

    }


    return final_arr;
}

const result = threeSum(arr,target);
console.log('result >>>',result);


