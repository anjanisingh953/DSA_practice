const arr = [1, 2, 4, 5];

function findMissingNumber(arr) {
    let n = arr[arr.length - 1]

    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return total - sum;
}

const result = findMissingNumber(arr);
console.log('result >>>', result);
