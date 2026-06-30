let arr = []
let currentSize = arr.length;
let max = 5;

function enqueue(newElement){
    if(currentSize >= max){
      console.log(`Queue is already full`);
    }else{
        arr[currentSize] = newElement;
        currentSize = currentSize + 1;
    }
}

enqueue(20)
enqueue(30)
enqueue(40)




function dequeue(){
   if(currentSize > 0){
        for(let i = 0; i < arr.length ; i++){
            arr[i] = arr[i+1];
        }
        currentSize = currentSize - 1;
        arr.length = currentSize;
   }else{
    console.log(`Queue is already Empty`)
   }
}

dequeue();

console.log(arr)