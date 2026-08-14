const arr = [7,7,7,7,13,11,12,7];
let m = 2; //no of bouquets required
let k = 3; // adjacentElement size


function possibleBouquets(arr, day, m, k ){
    let count = 0;
    let noOfBouquets = 0;

    for(let i =0; i<arr.length; i++){
        if(arr[i] <= day){
            count++;
        }else{
            noOfBouquets += count/k
            count = 0;
        }
    }

    noOfBouquets += count/k;
    
    return noOfBouquets >=m;
}


function findMinimumDayForBouquetMaking(arr,m,k){
    let possible_bouquets = m*k;
    
    if(possible_bouquets>arr.length) return -1;
    
    let mini = Number.MAX_SAFE_INTEGER;
    let maxi = Number.MIN_SAFE_INTEGER;
    
    for(let i=0; i<arr.length; i++){
        mini = Math.min(mini,arr[i]);
        maxi = Math.max(maxi,arr[i]);
    }
    
    let low = mini; let high = maxi;
    let ans = high;

    while(low <= high){
      let mid = Math.floor((low+high)/2);
       
      if(possibleBouquets(arr,mid,m,k)){
        ans = mid;
        high = mid -1;
      }else{
        low = mid+1;
      }
      
    }
    return ans;
}


const result = findMinimumDayForBouquetMaking(arr,m,k);
console.log('result >>>',result);