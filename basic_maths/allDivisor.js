//All possible divisor of any number, can be get by looping upto its squareroot.

function allDivisor(n) {
    const arr = []
    for (let i = 1; i<= Math.sqrt(n); i++) {
        if (n % i == 0) {
                arr.push(i);
            if(n/i != i){
                arr.push(n/i);
            }
        }
    }
    console.log(arr.sort((a,b)=>a-b));
    
}

allDivisor(36);