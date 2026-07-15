const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];


function rotateImage(matrix) {
    let n = matrix.length;

    //transpose
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }

    //reverse each row after transpose
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            let temp1 = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp1;
        }
    }
 return matrix;
}

const result = rotateImage(matrix);
console.log('result >>>',result)