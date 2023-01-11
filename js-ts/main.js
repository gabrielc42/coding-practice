console.log("hello :()");

  array1 = [1,2,3,4,5,6,7];
  array2a = [4,5,6,7,8,1,2,3]; 
  console.log(rotate_array(array1, array2a));

  array2b = [4,5,6,7,1,2,3];
  console.log(rotate_array(array1, array2b));

  array2c = [4,5,6,9,1,2,3]; 
  console.log(rotate_array(array1, array2c));

  array2d = [4,6,5,7,1,2,3]; 
  console.log(rotate_array(array1, array2d));

  array2e = [4,5,6,7,0,2,3]; 
  console.log(rotate_array(array1, array2e));

  array2f = [1,2,3,4,5,6,7]; 
  console.log(rotate_array(array1, array2f));



function rotate_array(list1, list2) {
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