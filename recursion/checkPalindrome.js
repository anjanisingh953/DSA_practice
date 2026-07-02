let str = 'LEVEL';

function checkPalindrome(str,i=0){
    if(i>=Math.floor(str.length / 2)) return true;
    if(str[i] !== str[str.length-i-1]) return false;
    return checkPalindrome(str,i+1);
}

const result = checkPalindrome(str);
console.log('result>>>',result);
