let x = 5;


function getFactorial(val){

    if(val=== 0 || val === 1){
        return 1;
    }
    return val*getFactorial(val-1);
}

const  result = getFactorial(x);
console.log("RESULT >>> ",result);