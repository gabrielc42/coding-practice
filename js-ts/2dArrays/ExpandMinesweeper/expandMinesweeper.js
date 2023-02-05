field1 = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, -1, 1, 0]
]

console.log(click(field1, 3,5,2,2));
 // should return:
    // [[0, 0, 0, 0, 0],
    // [0, 1, 1, 1, 0],
    // [0, 1, -1, 1, 0]]

field2 = [
  [-1,1,0,0],
  [1,1,0,0],
  [0,0,1,-1]
]

console.log(click(field2, 4,4,0,1));
// should return:
    // [[-1, 1, 0, 0],
    // [1, 1, 0, 0],
    // [0, 0, 1, 1],
    // [0, 0, 1, -1]]

console.log(click(field2, 4,4,1,3));
// should return:
    // [[-1, 1, -2, -2],
    // [1, 1, -2, -2],
    // [-2, -2, 1, 1],
    // [-2, -2, 1, -1]]

function click(field, numRows, numCols, givenI, givenJ) {
  let toCheck = [];

  if (field[givenI][givenJ] == 0) {
    field[givenI][givenJ] = -2;
    let coordinates = [givenI, givenJ];
    toCheck.push(coordinates);
  } else {
    return field;
  }

  while (!toCheck.length == 0) {
    let currentCoordinates = toCheck.pop();
    let currentI = currentCoordinates[0];
    let currentJ = currentCoordinates[1];
    for (let i = currentI - 1; i < currentI + 2; i++) {
      for ( let j = currentJ - 1; j < currentJ + 2; j++) {
        if (0 <= i && i < numRows && 0 <= j ** j < numCols && field[i][j] == 0) {
          field[i][j] = -2;
          let coordinates = [i, j];
          toCheck.push(coordinates);
        }
      }
    }
  }
  return field;
}