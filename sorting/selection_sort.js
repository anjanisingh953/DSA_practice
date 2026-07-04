const arr = [25,77, 63, 0, 2, 1, 53, 4, 78, 6, 12]

function selection_sort(arr) {
    let min;
    for (let i = 0; i < arr.length-1; i++) {
            min = i;
        for (let j = i+1; j <arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
    }
    
}

selection_sort(arr)
console.log('result',arr);