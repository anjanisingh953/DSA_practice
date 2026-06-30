const arr = [10,2,65,30,45,50,100];

function accessData(indexNumber){

    if(indexNumber < arr.length && parseInt(indexNumber) && indexNumber >= 0){
        return arr[indexNumber];
    }else{
        return "Please enter a valid index number";
    }

}

const result = accessData(3);
console.log('Output >>>>',result);