const arr =[15,2,3,16,14,10,51,3,4,8];

function bubble_sort(arr){
    for (let i = arr.length-1; i >=0; i--) {
    let didswap = 0;
        for(let j=0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
           let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            didswap = 1

            }
         }

        if(didswap ==0){
            break;
        }
    }
}

bubble_sort(arr)
console.log('arr>>>',arr);;
