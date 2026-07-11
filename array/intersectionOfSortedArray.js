const arr1 = [1,2,2,3,3,4,5,4,6]
const arr2 = [2,3,3,5,6,6,7];

function getIntersectionSortedArr(arr1,arr2){

    let n1 = arr1.length;
    let n2 = arr2.length;
    let i = 0;
    let j = 0;
    let temp_arr = [];

    while(i<n1 && j<n2){
        
        if(arr1[i]<arr2[j]){
            i++;
        }
        else if(arr2[j]<arr1[i]){
            j++;
        }else{
            temp_arr[temp_arr.length] = arr1[i]
            i++;
            j++;
        }

    }


    return temp_arr;
}

const result = getIntersectionSortedArr(arr1,arr2);
console.log('result >>>>',result);

