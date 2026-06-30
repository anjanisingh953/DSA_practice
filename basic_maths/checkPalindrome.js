function checkPalindrome(n) {
    let reverse_number = 0;
    let duplicate_val = parseInt(n)
    while(duplicate_val>0){
        let lastDigit = parseInt( duplicate_val % 10 );
        duplicate_val = parseInt( duplicate_val / 10 );
        reverse_number = (reverse_number*10) + lastDigit ;
    }
    console.log(reverse_number==n)
    
}
checkPalindrome(121)