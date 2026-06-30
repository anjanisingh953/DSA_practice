const arr = [10,20,30,47,87,90,100];
let index;
function searchIndex(element){
    if(typeof (element) === 'number'){
        for(let i = 0; i< arr.length; i++){
            if(arr[i] == element){
                return index = i;    
                break;
            }
        }
   }else{
    return "Enter a valid number";
   } 

}

const result = searchIndex(30);
console.log("Output >>>>> ",result);


