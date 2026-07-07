
const arr = [4,1,5,2];

function insertion_sort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {

        let curr = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = curr;
    }

    return arr;
}

const result =insertion_sort(arr);
console.log('result>>>>',result);
