let arr1 = [5,1,2,3,7];
function reverseAnArray(ind,arr){
   if (ind >= Math.floor(arr.length / 2)) {
        return arr;
    }

    let temp = arr[ind];
    arr[ind] = arr[arr.length - ind - 1];
    arr[arr.length - ind - 1] = temp;

    return reverseAnArray(ind + 1, arr);
}

const result = reverseAnArray(0,arr1)
console.log('Reverse array >>',result );
