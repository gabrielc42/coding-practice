// tests
array = [1, 2, 3, 4]
console.log(duplicate(array));

array = [4, 2, 3, 6]
// print()

array = [9, 64, 2, 11, 2, 0, 2];
// print()



function duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr[i]);
  }
}