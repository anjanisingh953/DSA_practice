//Anagram strings are two strings built up by the same set of characters, where the order of characters
// is the only difference in the strings
let str1 = "degamawasco";
let str2 = "wascodegama";


function checkAnagram(str1,str2){
    if(str1.length !==  str2.length){
        return false;
    }

    console.log(str1, ' >>>> ',str2);
    
    let strObj = {};

    for(ch of str1){
        strObj[ch] = (strObj[ch] || 0)+1;
    }

    for(ch of str2){
        if(!strObj[ch]){
            return false;
        }
         strObj[ch]--;
    }
    return true;
}


console.log(checkAnagram(str1, str2)) ;

