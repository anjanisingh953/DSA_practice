
function generateRow(row) {
    let ans = 1;
    let ansRow = [];
    ansRow.push(ans);

    for (let col = 1; col < row; col++) {
        ans = ans * (row - col);
        ans = ans / col;
        ansRow.push(ans);
    }
    return ansRow;
}

var generatePascalTriangle = function (numRows) {
    let pascalTriangle = [];

    for(let i = 1; i <= numRows; i++){
        pascalTriangle.push(generateRow(i))
    }
    return pascalTriangle;
};
console.log(generatePascalTriangle(6))
