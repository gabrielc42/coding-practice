a1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotate(a1, 4));
// should return:
        // [[7, 4, 1],
        //  [8, 5, 2],
        //  [9, 6, 3]]

function rotate(a, n) {

  let rotated = [n][n];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = a[i][j];
      }
    }
  return rotated;
}