function fibonacci(n){
    if(n<=1){
        return n;
    }

    let last = fibonacci(n-1);
    let second_last = fibonacci(n-2);

    return last + second_last;

}

const result = fibonacci(4)
console.log('result >>>',result);
