const arr1 = [10,20,91,40,120,180];
const arr2 = [50,70,100,200,300,400,500];
const arr3 = [];

let d1 = 0;
let d2 = 0;
let d3 = 0;
let count = 0;

while(arr3.length < arr1.length+arr2.length){

    if(arr1[d1] <arr2[d2]){
        arr3[d3] = arr1[d1];
        d1++;
        d3++;
    }else{
        arr3[d3] = arr2[d2];
        d2++;
        d3++;
    }
}


console.log('Output >>>>> ',arr3);

console.log('d3 >>>>> ',d3);