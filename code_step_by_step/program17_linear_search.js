let arr = [10,4,30,49,233,404,35];
let find = 49;
let pos = undefined;

for(let i =0; i < arr.length; i++ ){
    if(arr[i] == find){
        pos = i;
        break;
    }
}

console.log("Output >>>> ",pos);