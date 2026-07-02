let arr1 = [5,1,2,3,7];
function reverseAnArray(arr,ind=0){
   if (ind >= Math.floor(arr.length / 2)) {
        return arr;
    }

    let temp = arr[ind];
    arr[ind] = arr[arr.length - ind - 1];
    arr[arr.length - ind - 1] = temp;

    return reverseAnArray(arr,ind + 1);
}

const result = reverseAnArray(arr1)
console.log('Reverse array >>',result );
