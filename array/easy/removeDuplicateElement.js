const arr = [1, 1, 2, 2, 2, 3, 3];

//count unique element after removing the duplicate element from array
function removeDuplicateElement(arr) {
    let n = arr.length;
    let i = 0;
    for (let j = 1; j < n; j++) {
        if(arr[j] != arr[i]){
        
            arr[i+1] = arr[j];
            i++;
        }
    }
    console.log(arr)
    return i+1;
}

const result = removeDuplicateElement(arr);
console.log('count of unique element >>>>', result);