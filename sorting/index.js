const arr = [15, 2, 3, 16, 14, 10, 51, 3, 4, 8];

function sorting(arr) {
    let n = arr.length;

    for(let i =0; i<arr.length-2; i++){
            let min = i;
            
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp

    }

    return arr;
}
const result = sorting(arr);
console.log('result>>>', result);