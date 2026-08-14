const arr = [3,6,7,11];
const hour = 8;

function findMaxElement(arr){
    let maximumElement = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    for(let i =0; i<n; i++){
        maximumElement = Math.max(maximumElement,arr[i]) 
    }   

    return maximumElement;
}

function  calculateTotalHours(arr,hour){
    let totalHour = 0;
    let n = arr.length;
  
    for(let i= 0; i<n; i++){
        totalHour += Math.ceil(arr[i]/hour);
    }
  
    return totalHour;
}


function minimumRateToEatBananas(arr,hour){
    let low = 1;
    let high = findMaxElement(arr);
    let ans = high;

    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let totalHour = calculateTotalHours(arr,mid);
        if(totalHour<=hour){
            ans = mid;
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
    return ans;
}

const result = minimumRateToEatBananas(arr,hour);
console.log('result >>>>',result);