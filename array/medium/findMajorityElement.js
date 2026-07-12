const arr = [2, 2, 3, 3, 1, 2, 2];

function findMajorityElement(arr) {
    let n = arr.length;
    let count = 0;
    let el;

    for (let i = 0; i < n; i++) {
        if (count == 0) {
            el = arr[i]
        }
        else if (el == arr[i]) {
            count++;
        }
        else {
            count--;
        }
    }

    let count2 = 0;

    for (let i = 0; i < n; i++) {
        if(arr[i] == el) count2++;
    }

    if(count2 > (arr.length/2)){
        return el;
    }

    return -1     

}

const result = findMajorityElement(arr);
console.log('result >>>', result);
