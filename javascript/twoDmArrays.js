var bombs1 = [
    [0, 2],
    [2, 0]
];
console.log(minesweeper(bombs1, 3, 3));
// [[0, 1, -1],
// [1, 2, 1],
// [-1, 1, 0]]

var bombs2 = [
    [0, 0],
    [0, 1],
    [1, 2]
];
console.log(minesweeper(bombs2, 3, 4));
// [[-1, -1, 2, 1],
// [2, 3, -1, 1],
// [0, 1, 1, 1]]

var bombs3 = [
    [1, 1],
    [1, 2],
    [2, 2],
    [4, 3]
];
console.log(minesweeper(bombs3, 5, 5));
// [[1, 2, 2, 1, 0],
// [1, -1, -1, 2, 0],
// [1, 3, -1, 2, 0],
// [0, 1, 2, 2, 1],
// [0, 0, 1, -1, 1]]

function minesweeper(bombs, numRows, numCols) {
    var field = [];
    for (var i = 0; i < numRows; i++) {
        field[i] = [];
        for (var j = 0; j < numCols; j++) {
            field[i][j] = 0;
        }
    }
    for (const bomb of bombs) {
        const rowIndex = bomb[0];
        const colIndex = bomb[1];
        field[rowIndex][colIndex] = -1;
        for (let i = rowIndex - 1; i < rowIndex + 2; i++) {
            for (let j = colIndex - 1; j < colIndex + 2; j++) {
                if (0 <= i && i < numRows &&
                    0 <= j && j < numCols && field[i][j] != -1) {
                    field[i][j] += 1;
                }
            }
        }
    }
    return field;
}
