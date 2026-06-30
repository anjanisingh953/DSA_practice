const arr = [10,20,30,40,50,60,70];

function deleteElement(indexNumber){
    if(arr.length >= indexNumber){
        for (let i = indexNumber; i < arr.length-1; i++) {
            arr[i] = arr[i+1];
        }
        arr.length =  arr.length-1;
        return arr;
    }else{
        return "Please enter a valid indexNumber";
    } 
}

const result =  deleteElement(1);
console.log('Output >>>> ', result);