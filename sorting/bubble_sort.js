//1st way
const arr = [15, 2, 3, 16, 14, 10, 51, 3, 4, 8];

function bubble_sort2(arr) {
    let n = arr.length;

    for (let i = n - 1; i > 1; i--) {
        let didSwap = false;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                didSwap = true;
            }
        }

        if (!didSwap) break;
    }
    return arr;
}
const result = bubble_sort2(arr);
console.log('result>>>', result);

// //2nd way
// const arr =[15,2,3,16,14,10,51,3,4,8];

// function bubble_sort(arr) {
//     let n = arr.length;
//     for (let i = 0; i <n - 1; i++) {
//         let didSwap = false;        
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 didSwap = true;
//             }
//         }
//         if (!didSwap) break;
//     }
//     return arr;
// }
// const result = bubble_sort(arr);
// console.log('result>>>',result);