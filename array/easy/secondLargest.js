const arr = [10,20,50,78,96,10];

function secondHighest(arr){
    let n = arr.length;
    let largestElement = arr[0];
    let secondLargestElement = -1;
    for(let i=1; i<n; i++){
        if(arr[i]>largestElement){
            secondLargestElement = largestElement;
            largestElement = arr[i];
        }

        if(arr[i]<largestElement && arr[i] > secondLargestElement){
            secondLargestElement = arr[i]
        }
    }

    return secondLargestElement;
}

const result = secondHighest(arr);
console.log('result >>>', result)