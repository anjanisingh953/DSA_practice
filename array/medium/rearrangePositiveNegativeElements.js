const arr = [4,3,-4,2,-3,5,-6,1,-5,-1];

function rearrangePositiveNegativeElements(arr){
    let n = arr.length;
    let posIndex = 0;
    let negIndex = 1;
    let  temp_arr = []; 
    for(let i =0; i < n; i++){
        if(arr[i]<0){
            temp_arr[negIndex] = arr[i]
            negIndex += 2;
        }else{
            temp_arr[posIndex] = arr[i];
            posIndex += 2; 
        }
    }
    return temp_arr;

}

const result = rearrangePositiveNegativeElements(arr);
console.log('result >>>>',result);