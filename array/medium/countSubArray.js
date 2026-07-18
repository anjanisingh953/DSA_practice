const arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const k = 3;

function subArraySum(arr,k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == k) {
                count++;
            }
        }
    }

    return count;
}

const result = subArraySum(arr,k);
console.log('result >>>', result);
