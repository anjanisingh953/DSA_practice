let arr = [11,24,5,121,74,34,9];
let newarr = [];

for(let i =0; i <= arr.length; i++){

    if(arr[i]%2 == 0){
        newarr.push(arr[i]*2);
    }
}

console.log("Output >>>> ",newarr);