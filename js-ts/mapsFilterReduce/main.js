// array squared

input = [1, 2, 3, 4, 5];
// [1, 4, 9, 16, 25];

// input.map(function (num) {
//   return Math.pow(num, 2);
// });

input = input.map((num) => Math.pow(num, 2)); // personally prefer this style
console.log(input);


// sum of every positive element

input = [1, -4, 12, 0, -3, 29, -151];
// 42;

input = input
  .filter((num) => num > 0 )
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(input);


// median and mean

// input = [12, 46, 32, 64];
//  { mean: 38.5, median: 39 }

input = [12, 46, 32, 64];
input.sort((a, b) => a - b);

meanAndMedian = input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);

console.log(meanAndMedian);


// get name initials

input = "Santa Forthwright Onigiri"

init = input
  .split(" ")
  .map((word) => word[0])
  .join("");

console.log(init);