function apple(x){
    console.log(x);
    if(x<10){
        apple(x+1)
    }
}

let data = 0;
apple(data)