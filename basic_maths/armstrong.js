function checkArmStrong(n) {

    let total = 0
    let duplicate_val = n;
    while (duplicate_val > 0) {
        let lastDigit = parseInt(duplicate_val % 10);
        duplicate_val = parseInt(duplicate_val / 10);
        total = total + (lastDigit * lastDigit * lastDigit)
    }
    console.log(total == n)
}

checkArmStrong(153)