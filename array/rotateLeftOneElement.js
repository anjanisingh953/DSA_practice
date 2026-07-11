const arr = [1, 2, 3, 4, 8, 9, 7];

//Put the left first element to the last(right)
function rotateLeftOneElement(arr) {
    let n = arr.length;
    let leftElement = arr[0];

    for (let i = 1; i < n; i++) {
        arr[i-1] = arr[i]
    }
    arr[n-1] = leftElement
    return arr;
}

const result = rotateLeftOneElement(arr);
console.log('result >>>>', result)