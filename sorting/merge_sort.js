const arr = [21, 10, 3, 13, 5];

function merge(arr, low, mid, high) {

    // console.log('mid inside',low,mid,high);

    let temp = [];
    let i = low;
    let j = mid + 1;

    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i])
            i++;
        } else {
            temp.push(arr[j])
            j++;
        }
    }
    while (i <= mid) {
        temp.push(arr[i])
        i++;
    }
    while (j <= high) {
        temp.push(arr[j])
        j++;
    }

    for(let ind=low; ind<=high; ind++){
        arr[ind] = temp[ind-low];
    }


}

function merge_sort(arr, low, high) {

    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);

    //recursion happens here
    merge_sort(arr, low, mid);
    
    merge_sort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}


merge_sort(arr, 0, arr.length - 1);
console.log(arr)