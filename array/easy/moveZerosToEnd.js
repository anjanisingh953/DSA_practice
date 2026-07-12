const arr = [1, 0, 2, 3, 0, 4, 0, 1];

function moveZerosToEnd(arr) {
    let j = -1;

    // Find the first zero
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    // If no zero exists
    if (j === -1) return arr;

    // Move non-zero elements forward
    for (let i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}

const result = moveZerosToEnd(arr);
console.log('result >>>',result);
