//Head Recursion


function test(x){


    console.log(x)
    if(x>0){
        test(x-1)
    }
}
let data1 = 10;
test(data1);


//Tail Recursion


function test(x){


    if(x>0){
        test(x-1)
    }
    console.log(x)

}
let data2 = 10;
test(data2);


