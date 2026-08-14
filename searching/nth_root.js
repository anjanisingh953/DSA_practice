const n = 27;
let power = 3;
//return 1 if ans == n
//return 0 if ans < n
//return 2 if ans > n


function calculate(mid,power,n){
    let ans = 1;

    for(let i=1; i<=power; i++){
        ans = ans * mid;
        if(ans>n) return 2;
    }

    if(ans == n) return 1;
    return 0;
}


function NthRoot(power,n){
    let low = 1;
    let high = n;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let calcResult = calculate(mid,power,n);

        if(calcResult == 1) return mid;

        else if(calcResult == 0) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}



const result = NthRoot(power,n);
console.log('result >>>',result);
