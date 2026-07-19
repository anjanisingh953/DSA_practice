let arr = [1,2,2,1,3,1,1,2]

function majorityElement(arr){
    let cnt1 = 0; let cnt2 = 0;
    let  el1 = Number.MIN_SAFE_INTEGER;
    let  el2 = Number.MIN_SAFE_INTEGER;

    for(let i=0; i < arr.length; i++){
         
        if(cnt1 == 0 && el2 != arr[i]){
            cnt1 = 1;
            el1 = arr[i];
         }
         else if(cnt2 ==0 && el1 != arr[i]){
            cnt2 = 1;
            el2 = arr[i];
         }

         else if(arr[i] == el1) cnt1++;
         else if(arr[i] == el2) cnt2++;
         else{
             cnt1--;
             cnt2--;
         }

    }


    let elementList = [];
    let cnt3 = 0; let cnt4 =0;

    for(let i = 0; i < arr.length; i++){
        if(el1 == arr[i]) cnt3++;
        if(el2 == arr[i]) cnt4++;
    }

    let mini = Math.floor(arr.length/3) +1;

    if(cnt3 >= mini) elementList.push(el1);
    if(cnt4 >= mini) elementList.push(el2);


    return elementList;

}

const result = majorityElement(arr);
console.log('result ',result);
