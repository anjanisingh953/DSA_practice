const arr1 = [1, 1, 2, 3, 4, 5,8];
const arr2 = [2, 3, 4, 4, 5, 6];

function getUnionElements(arr1, arr2) {

    let n1 = arr1.length;
    let n2 = arr2.length;

    let i = 0;
    let j = 0;
    let temp_arr = [];

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            if (temp_arr.length === 0 || temp_arr[temp_arr.length - 1] != arr1[i]) {
                temp_arr[temp_arr.length] = arr1[i]
            }
            i++;
        } else {
            if (temp_arr.length === 0 || temp_arr[temp_arr.length - 1] != arr2[j]) {
                temp_arr[temp_arr.length] = arr2[j]
            }
            j++;
        }
    }

    while (i < n1) {
        if (temp_arr.length === 0 || temp_arr[temp_arr.length - 1] != arr1[i]) {
            temp_arr[temp_arr.length] = arr1[i]
        }
        i++;
    }

    while (j < n2) {
        if (temp_arr.length === 0 || temp_arr[temp_arr.length - 1] != arr2[j]) {
            temp_arr[temp_arr.length] = arr2[j]
        }
        j++;
    }

    return temp_arr;
}



const result = getUnionElements(arr1, arr2);
console.log('result >>>>', result)