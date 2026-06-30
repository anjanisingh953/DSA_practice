let arr = [5,9,13,17,19,21,50,70,90,130];
let find = 50;
let start = 0;
let end = arr.length - 1;
let position = undefined;

while(start<=end){
    let mid = Math.floor( (start+end)/2 );
    if(arr[mid] == find){
        position = mid;
        break;
    }else if(arr[mid] < find){
        start = mid + 1;
    }else{
        end = mid - 1;
    }
}

console.log("Output >>>> ",position);