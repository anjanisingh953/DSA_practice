//parameterized function
function sumFirstThreeDigit(n,sum) {

    if(n<1){
        console.log(sum);
        return;
    }

    sumFirstThreeDigit(n-1,sum+n)
}

sumFirstThreeDigit(3,0) 


//Dynamic function
function sumFirstThreeDigit2(n) {

    if(n<1){
        return 0 ;
    } 

    return  parseInt(n + sumFirstThreeDigit2(n-1))
    
}

const result  = sumFirstThreeDigit2(3)
console.log('result>> ', result);

