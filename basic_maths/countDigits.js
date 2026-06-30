function countDigits(n){
    let count = 0;
    while(n>0){
        n = parseInt(n/10);
        count = count+1;
    }
    console.log(count);
    
}

countDigits(5234)