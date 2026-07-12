const arr = [7, 1, 5, 3, 6, 4];


function bestTimeToBuySellStock(arr){
   
   let bestBuyingprice = arr[0];
   let bestSellingPrice = arr[1];
    let maxProfit = 0;

   for(let i=1; i<arr.length; i++){

            let price =  arr[i];

            if(price<bestBuyingprice){
                bestBuyingprice = arr[i];
            }

            else {
            const currentProfit = price - bestBuyingprice;

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
                bestSellingPrice = price;
            }
        }


   }

   return {bestBuyingprice,bestSellingPrice,maxProfit}
   
}

const result = bestTimeToBuySellStock(arr);
console.log('result >>>',result);