const arr = [1,1,2,3,3,4,4];



function (arr){
    let xorr =0getSingleElement;

    for(let i=0; i<arr.length; i++){
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

const result = getSingleElement(arr)
console.log('result >>>',result);
