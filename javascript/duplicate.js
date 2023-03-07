// tests
array = [1, 2, 3, 4]
console.log(duplicate(array));

array = [4, 2, 3, 6]
console.log(duplicate(array));


array = [9, 64, 2, 11, 2, 0, 2];
console.log(duplicate(array));



function duplicate(arr) {
  return [...arr, ...arr];
}