//counting the frequency of array elements

const arr = [1,2,3,7,1,9,3,7,3,6,3,12,15];

function countingFrequencies(arr,searchElement){
    
    //prestoring or precompute
    const hash_arr = new Array(16).fill(0);

    for(let i=0; i<arr.length;i++){
        hash_arr[arr[i]] +=1;        
    }

    //fetching the frequency of searchElement of the array    
    const countValue = hash_arr[searchElement];
    console.log('count of searchElement is : ',countValue);
    
}

countingFrequencies(arr,7)