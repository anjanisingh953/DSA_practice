const arr = [10,20,30,40,50,60,70];

function arrayInsertion(indexNumber, newElement){

    if(indexNumber < arr.length && indexNumber >-1  && typeof(indexNumber) == 'number'){
        for (let i = arr.length-1; i >=0; i--) {
            // console.log(arr[i])
            if(i >= indexNumber){
                arr[i+1] = arr[i];
                if(i == indexNumber){
                    arr[i] = newElement;
                }
            } 
                  
        }
        return arr
    }else{
        return "Please enter a valid indexNumber"
    }

}
console.log("new Arr",arr)
const result = arrayInsertion(2,707);
console.log("Output >>>>>> ",result);