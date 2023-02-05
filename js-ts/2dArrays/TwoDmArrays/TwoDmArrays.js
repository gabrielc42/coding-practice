bombs1 = [
  [0, 2],
  [2, 0]
]

console.log(minesweeper(bombs1, 3, 3));

function minesweeper(bombs, numRows, numCols) {
  let field = [numRows][numCols];
  field[numRows][numCols] = 0;

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