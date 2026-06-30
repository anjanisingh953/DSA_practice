let money = 30
let totalApple = 0;
function buyApple(x){
    if(x>0){
        console.log("Total Apple",totalApple,"Money Left",x)
        buyMore(x)

    }else{
    console.log("You don't have enought money, total apple",totalApple)
    }
}


function buyMore(x){
        totalApple++;
        buyApple(x-5);
}

buyApple(money)