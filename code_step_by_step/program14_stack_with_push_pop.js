
let data = [];
let currentSize = data.length;
let max = 5;

function customPush(newElement){

    if(currentSize >= max){
        console.log("Stack is Full")
    }else{
        data[currentSize] = newElement;
        currentSize = currentSize+1;
        console.log(data.length);
    }

}

function CustomPop(){
    if(currentSize>0){
        currentSize = currentSize - 1;
        data.length = currentSize;
    }else{
        console.log("Stack is already Empty");
    }

}

customPush(20);
customPush(30);
CustomPop()
customPush(40)
customPush(50)
customPush(60)
customPush(60)
console.log("Output >>> ",data);