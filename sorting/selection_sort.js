const arr = [5, 13, 46, 24, 52, 20, 9]

function selection_sort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let min = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}
const result = selection_sort(arr)
console.log('result>>>', result);
