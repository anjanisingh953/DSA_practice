const matrix = [[1, 1, 1, 1], [0, 1, 1, 1], [1, 1, 0, 1], [1, 0, 1, 1]];


function setMatrixZeroes(matrix) {
    let row = []
    let column = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                row[i] = 1;
                column[j] = 1;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || column[j]) {

                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

const result = setMatrixZeroes(matrix);
console.log('result >>>', result);

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//         process.stdout.write(matrix[i][j].toString())
//     }
//     console.log('');

// }

