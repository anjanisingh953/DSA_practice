//In bubble sort, we use the loop upto size*size(element*element) 


const arr = [10,7,15,2,1,1100,8,3,54,70,9];

let temp;

for(let i = 0; i < arr.length ; i++ ){
   for(let j = 0; j < arr.length ; j++ ){
     
      if(arr[j] > arr[j+1]){
           temp =  arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp;
      }      
 }
}

console.log("Result >>> ", arr);