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
// { mean: 38.5, median: 39 }

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


// age difference from youngest and oldest

input = [
  {
    name: "Sugar",
    age: 13,
  },
  {
    name: "Santos",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nathan",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

// [13, 67, 54];

ages = input.map((person) => person.age); 
difference = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(difference);


// numeronyms

input = "Every developer likes to mix kubernetes and javascript";
// "E3y d7r l3s to mix k8s and j8t";

createNumeronym = (word) => 
  word[0] + (word.length - 2) + word[word.length - 1];

numeronym = input
  .split(" ")
  .map((word) => (word.length >= 4 ? createNumeronym(word) : word))
  .join(" ");

console.log(numeronym);



// n! w/ map and reduce

input = 6;
// 720

array = new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(array);


// count elements in array of arrays

input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

// {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2,
//   f: 2,
//   g: 1,
// }

count = input
  .flat()
  .reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});

console.log(count);


// high performing students

students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];

// [ 
//   { name: 'Jack', average: 100 }
// ]

studentAverages = students.map(student => {
  sum = student.scores.reduce((acc, score) => acc + score);
  return { name: student.name, average: sum / student.scores.length };
});

highPerformers = studentAverages.filter(student => student.average > 90);

console.log(highPerformers);


// high priced product categories

products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

// [ 
//   { category: 'Clothes', average: 55 },
//   { category: 'Electronics', average: 55 }
// ]

productsByCategory = products.reduce((acc, product) => {
  category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});

avgPriceByCategory = Object.keys(productsByCategory).map(category => {
  sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
  return { category: category, average: sum / productsByCategory[category].length };
})

highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

console.log(highPricedCategories);


// hr vs it department

employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

// [
//   { department: 'HR', average: 71666 }
// ]

employeesByDepartment = employees.reduce((acc, employee) => {
  department = employee.department;
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(employee);
  return acc;
}, {});

avgSalaryByDepartment = Object.keys(employeesByDepartment)
  .map(department => {
    sum = employeesByDepartment[department].reduce((acc, employee) => acc + employee.salary, 0);
    return { department: department, average: sum / employeesByDepartment[department].length };
  })

highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);

console.log(highPaidDepartments);