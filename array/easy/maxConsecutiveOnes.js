let arr = [1,1,0,1,1,1,0,1,1];

function maxConsecutiveOnes(arr){
    let max = 0;

    let count =0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1){
            count = count+1;
            if(count>max){
                max = count;
            }

        }else{
            count = 0;
        }        
    }
    return max;
}

let result = maxConsecutiveOnes(arr);
console.log('result >>>',result);