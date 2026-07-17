//
const matrix = [[1, 2, 3, 4, 5, 6], [20,21,22,23,24,7], [19,32,33,34,25,8], [18,31,36,35,26,9], [17,30,29,28,27,10], [16,15,14,13,12,11]];

function printSpiralMatrix(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let s_row = 0; let end_row = m - 1;
    let s_col = 0; let end_col = n - 1;

    let temp = [];

    while (s_row <= end_row && s_col <= end_col) {

        //top
        for (let j = s_col; j <= end_col; j++) {
            temp.push(mat[s_row][j])
        }
        s_row++;

        //right
        for (let i = s_row; i <= end_row; i++) {
            temp.push(mat[i][end_col])
        }
        end_col--;

        //bottom
        if (s_row <= end_row) {
            for (let j = end_col; j >= s_col; j--) {
                temp.push(mat[end_row][j]);
            }
            end_row--;
        }


        //left
        if (s_col <= end_col) {
            for (let i = end_row; i >= s_row; i--) {
                temp.push(mat[i][s_col]);
            }
            s_col++;

        }
    }

    return temp;

}

const result = printSpiralMatrix(matrix);
console.log('result >>>', result);
