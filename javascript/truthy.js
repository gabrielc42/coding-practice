// javascript types & truthiness, thanks to Esin

let myVar = 1;
myVar = 'hello world';
myVar = [1,2,3];
myVar = () => console.log('now a function 🤯!!!!!!!!!!!!!');

console.log([2] + 1); // 21
console.log(1 + '1'); // 11
console.log('5' + 9); // 59
console.log('11' - 1); // 10
console.log('2' + '2' - '2'); // 20
console.log(undefined + 3); // NaN
console.log([] + 1); // 1

console.log(2 == 2); // true
console.log('2' == 2); // true
console.log([] == 0); // true
console.log(true == 1); // true


// primitive values can be auto-boxed 
// (converted to their corresponding object wrappers) as needed, 
// which allows us to run code like the following:
const myNameUpperCase = 'GORDON';
const myNameLowerCase = myNameUpperCase.toLowerCase();


const student1 = { name: 'Jimmy', age: 15 };
const student2 = { name: 'Jimmy', age: 15 };
const student3 = student1; 

console.log(student1 === student2); // false
console.log(student1 === student3); // true


const myArr = [1, 2, 3, 4];
const myArr2 = myArr;
myArr.push(5);
console.log(myArr); // what do you expect this to be?
// myArr is updated when myArr2 is in JS, 
// because myArr2 declared as myArr and reference same point in memory


// falsey values:
// false
// 0, -0, 0n (bigInt zero)
// empty strings ("", '', '')
// null
// undefined
// NaN

// reduce
const arr = [1, 2, 3];

while (arr.length) {
	console.log(arr.pop());
}


// {data.length && <div>{data.map(item => <p>{item.info}</p>)}<div>} // reflects upon data.length
// consider data.length > 0 rather, because if data.length is 0 JS returns 0 rather than boolean operation


console.log('hello' && true); // true
console.log([] && false); // false
console.log(0 && -1); // 0
console.log(false && true); // false

console.log('hello' || true); // hello
console.log({} || false); // {}
console.log(0 || 'hello'); // hello
console.log(undefined || []); // []
console.log(new Date() || false); // new Date()