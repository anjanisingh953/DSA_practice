const arr = [102, 4, 100, 1, 101, 3, 2, 1, 1, 5, 103, 104, 105];

function longestConsecutive(arr) {
   if (arr.length === 0) return 0;

    const newArr = arr.sort((a, b) => a - b);

    let current_consecutive_element = newArr[0];
    let highest_count = 1;
    let count = 1;

    for (let i = 1; i < newArr.length; i++) {

        // Duplicate
        if (newArr[i] === current_consecutive_element) {
            continue;
        }

        // If Consecutive
        if (newArr[i] === current_consecutive_element + 1) {
            count++;
        }
        // If New sequence found
        else {
            count = 1;
        }

        current_consecutive_element = newArr[i];

        if (count > highest_count) {
            highest_count = count;
        }
    }

    return highest_count;
}


const result = longestConsecutive(arr);
console.log('result >>>>', result);