//In insertion sorting we always start our outer with the nextIndex to Current Comparing Element 
// to sort the array

let arr = [12,11,13,5,6];

function insertionSort(data){

    let i , currentComparingValue, j ;

   for(let i = 1; i < data.length ; i++){

     currentComparingValue = data[i];
     j = i - 1;
     while(j >=0 && data[j] > currentComparingValue){
        data[j+1] = data[j];
        j = j - 1;
     }
     
     data[j+1] = currentComparingValue;

   } 
}


insertionSort(arr);
console.log(arr)