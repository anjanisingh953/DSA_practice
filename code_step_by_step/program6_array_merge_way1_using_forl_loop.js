
let arr1 = [10,30,50,70];
let arr2 = [101,220,330,400,500];

let finalarr = [];

for(i =0; i < arr1.length; i++){
    finalarr[i] = arr1[i];
}
for(i = 0; i < arr2.length ; i++){
    finalarr[arr1.length+i] = arr2[i];
}

console.log(finalarr);