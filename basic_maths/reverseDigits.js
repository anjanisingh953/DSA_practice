function reverse_digits(n) {
    let reverse_number = 0;

    while(n>0){
        let lastDigit = parseInt(n%10);
        n = parseInt(n/10);
        reverse_number = (reverse_number*10) + lastDigit ;
    }
    console.log(reverse_number)

}
reverse_digits(701)