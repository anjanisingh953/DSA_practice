const arr = [7,3,2,8,10,11,5,4];

function kLeftRotate(arr,d){
    const n = arr.length;
    //if d == arr.length then it means it has previous index 
    const elementCount = d%n;
        console.log(elementCount)

    let temp = [];

    for(i=elementCount; i<n; i++){
        temp[i-elementCount] = arr[i]
    }

    for(i=0; i<elementCount; i++ ){
        temp[temp.length] =arr[i]
    }

    return temp
}

const result = kLeftRotate(arr,10);
console.log('result>>>',result);