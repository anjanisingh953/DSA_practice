
function primeNumber(n) {
    let count = 0

    // for (let i = 1; i <= Math.sqrt(n); i++) {
    for (let i = 1; i*i <= n; i++) {
        console.log(i)
        if (n % i == 0) {
            count = count+1;
            if (n / i != i) {
                count = count+1;
            }
        }
    }
    if (count == 2) {
        console.log(n, 'is prime number')
    } else {
        console.log(n, 'is not a prime number')
    }
}
primeNumber(30)