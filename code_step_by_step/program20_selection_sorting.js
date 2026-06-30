let arr = [24,27,25,10,25,57,30,29];

function selectionSortingForAscOrder(data){

    let start_index;
    
    for(let i =0; i< data.length; i++){

        start_index = i;

        for(let j = start_index+1; j < data.length; j++){
            if(data[j] < data[start_index]){
                start_index = j;
            }
        }

        let temp = data[start_index];
        data[start_index] = data[i];
        data[i] = temp;

    }
}

selectionSortingForAscOrder(arr)
console.log(arr)


//Sorting an Array in Descending Order with Method1 (By just reverse the array) 

function selectionSortingForDscOrderMethod1(data){

    let start_index;
    
    for(let i = data.length -1 ; i >= 0 ; i--){

        start_index = i;

        for(let j = start_index - 1; j >= 0 ; j--){
            if(data[j] < data[start_index]){
                start_index = j;
            }
        }

        let temp = data[start_index];
        data[start_index] = data[i];
        data[i] = temp;

    }
}

selectionSortingForDscOrderMethod1(arr)
console.log(arr)


//Sorting an Array in Descending Order with Method1 (By just change the comparison logic) 
function selectionSortingForDscOrderMethod2(data){

    let start_index;
    
    for(let i =0; i< data.length; i++){

        start_index = i;

        for(let j = start_index+1; j < data.length; j++){
            if(data[j] > data[start_index]){
                start_index = j;
            }
        }

        let temp = data[start_index];
        data[start_index] = data[i];
        data[i] = temp;

    }
}

selectionSortingForDscOrderMethod2(arr)
console.log(arr)