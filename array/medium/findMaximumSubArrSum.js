    const arr = [-2,-3,4,-1,-2,1,5,-3];

    //Return the maximum sum of subArray 
    function findMaximumSubArrSum(arr){
        let maxArrSum = -1;;
        let sum = 0;
        
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];

            if(sum > maxArrSum){
                maxArrSum = sum;
            }

            if(sum<0){
                sum = 0;
            }
        }
        return maxArrSum;
    }


//Return the subArray, which subArray has maximum sum
    // function findMaximumSubArrSum(arr){
    //     let maxArrSum = -1;;
    //     let sum = 0;
    //     let startInd = -1;
    //     let endInd = -1;

    //     for(let i = 0; i < arr.length; i++){

    //         if(sum == 0) startInd = i;
            
    //         sum += arr[i];

    //         if(sum > maxArrSum){
    //             maxArrSum = sum;
    //             endInd = i;
    //         }
            
    //         if(sum<0){
    //             sum = 0;
    //         }
    //     }
    //     return {startInd, endInd, maxArrSum};
    // }






    const result = findMaximumSubArrSum(arr);
    console.log('result >>>',result);