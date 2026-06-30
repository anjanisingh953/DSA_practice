let arr = [9,11,14,16,17,23,24,37,40];

let start = 0;
let end = arr.length - 1;
let find = 23;
let position = undefined;

function customRecursive(data, start_index, end_index){

    let  mid = Math.floor( (start_index + end_index) / 2);

    if(data[mid] === find){
        position = mid;
        return true;
    }else if(data[mid] < find){
        customRecursive(data, mid+1, end_index);
    }else{
        customRecursive(data, start, mid-1);
    }
}

customRecursive(arr,start,end);

console.log('Output >>> ', position);