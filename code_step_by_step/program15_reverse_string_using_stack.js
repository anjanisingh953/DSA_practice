let arr = [];
let currentSize = arr.length;

function customPush(newElement){
    arr[currentSize] = newElement;
    currentSize += 1;
}

function customPop(){
    lastRemovedItem = arr[currentSize -1];
    currentSize = currentSize - 1;
    arr.length = currentSize;
    return lastRemovedItem;
}


function customReverse(item){

    for(let i =0; i < item.length ; i++){
       customPush(item[i]);
    }
    for(let i =0; i < item.length ; i++){
        item[i] = customPop();
    }
    return item.join('');

}

let str = "Anil";
str = str.split('');
str = customReverse(str);
console.log("Result >>>>",str) 




