const matrix = [ [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16] ];

function diagonal_sum(matrix){
    let n = matrix.length;
    let m = matrix[0].length;
    let sum =0
    for(let i=0; i<n; i++){
        sum += matrix[i][i];

        if(i != n-1-i){
            sum += matrix[i][n-i-1];
        }
    }

    return sum;
}

const result = diagonal_sum(matrix);
console.log('result >>>',result);
