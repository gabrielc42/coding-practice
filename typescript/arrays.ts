console.log("hello :()");


const rotate_array_ts = (list1: number[], list2: number[]) => {
  if (list1.length != list2.length) {
    return false;
  }

  var key = list1[0];
  var key_loc = -1;

  for (let i = 0; i < list2.length; i++) {
    if (list2[i] == key) {
      key_loc = i
      break;
    }
  }
  if (key_loc == -1) {
    return false
  }

  for (let i = 0; i < list1.length; i++) {
    let j = (key_loc + i) % list1.length;
    if (list1[i] != list2[j]) {
      return false;
    }
  }
  return true;
}

var array1 = [1, 2, 3, 4, 5, 6, 7];
var array2a = [4, 5, 6, 7, 8, 1, 2, 3];
console.log(rotate_array_ts(array1, array2a));
// false

var array2b = [4, 5, 6, 7, 1, 2, 3];
console.log(rotate_array_ts(array1, array2b));
// true

var array2c = [4, 5, 6, 9, 1, 2, 3];
console.log(rotate_array_ts(array1, array2c));
// false

var array2d = [4, 6, 5, 7, 1, 2, 3];
console.log(rotate_array_ts(array1, array2d));
// false

var array2e = [4, 5, 6, 7, 0, 2, 3];
console.log(rotate_array_ts(array1, array2e));
// false

var array2f = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate_array_ts(array1, array2f));
// true


