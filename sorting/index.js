const arr = [1, 0, 2, 0,53,2,0,0,4,5,1];

function moveZerosToEnd(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
 
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j]= temp;
            j++;
        }
    }

    return arr;
}

console.log(moveZerosToEnd(arr));