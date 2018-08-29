//For Object

let bob = {
  name: 'Bob',
  age: 22
}

let joe = {
  name: 'Joe',
  lastname: 'Doe',
  age: 21,
  location: 'NY'
}


Object.prototype.numberOfProps = function() {	
	return Object.keys(this).length
}

console.log(bob.numberOfProps()) // 2
console.log(joe.numberOfProps()) // 4
console.log('--------');

//-----

let obj1 = {
  item1: 23,
  item2: 'none',
  item3: '11',
  item4: NaN,
  item5: 0
}

let obj2 = {
  item1: 3,
  item2: -1
}

Object.prototype.sumOfNumberProps = function() {
	let sum = 0;

	for(let key in this) {
		if (Number.isNaN(+this[key]) == false)
		sum += +this[key];
	}
	return sum;
}

console.log(obj1.sumOfNumberProps()) // 34
console.log(obj2.sumOfNumberProps()) // 2
console.log('--------');

//------

Object.prototype.objectMap = function(callback, thisArg) {
	const obj = {};

	for (let key in this) {
		if(this.hasOwnProperty(key)) {
			obj[key] = callback(this[key], this);
		}
	}
	return obj;
}

console.log(obj1.objectMap(item => {
  return item + 1
})) // {
    //    item1: 24,
    //    item2: 'none1',
    //    item3: '111',
    //    item4: NaN,
    //    item5: 1
    //  }
console.log(obj2.objectMap(item => {
  return item + 1
})) // {
    //    item1: 4,
    //    item2: 0
    //  }
console.log('-----------')

//------

let num1 = 4;

Number.prototype.increment = function (a) {
	
	if (a == undefined) {
		num1++;
		return num1;
	} else {
		num1 += a;
		return num1;
	}
}

console.log(num1.increment()) // 5
console.log(num1.increment(5)) // 10
console.log(num1.increment(8)) // 18
console.log(num1.increment()) // 19
console.log('-----------')

//-------

let num2 = 30;

Number.prototype.decrement = function(a) {
	if(a == undefined) {
		num2--;
		return num2;
	} else {
		num2 -= a;
		return num2;
	}
}

console.log(num2.decrement()) // 29
console.log(num2.decrement(5)) // 24
console.log(num2.decrement(8)) // 16
console.log(num2.decrement()) // 15
console.log('---------');

//-------

let num3 = 123;
let num4 = 479;

Number.prototype.sumOfDigits = function() {
	let arr = this.toString().split([ ]);
	
	return arr.reduce(function(sum, value) {
		
		return Number(sum) + Number(value);
	})
}

console.log(num3.sumOfDigits()) // 1 + 2 + 3 => 6
console.log(num4.sumOfDigits()) // 4 + 7 + 9 => 20
console.log('---------');

//-------

let arr1 = [3, 5, 6, 8, 2];
let arr2 = [6, 8, 11, 4, 13];

Array.prototype.sumOfFirstLast1 = function() {
	let arr = this;

	return arr[0] + arr[arr.length - 1];
}

Array.prototype.sumOfFirstLast2 = function() {
	let arr = this;

	return arr.shift() + arr.pop();
}

console.log(arr1.sumOfFirstLast1()) // 5
console.log(arr2.sumOfFirstLast2()) // 21
console.log('---------');

//------

let arr3 = [3, [5, 19, 18], 6, [[7, 19, 31], [14, 18, 20]], 2];
let arr4 = [6, [4, 8], 11, [9, [10]], 13];

Array.prototype.innerMap = function(callback) {
	let arr = this;
	return arr.map(function(el) {
		if(Array.isArray(el)) {
			return el.innerMap(callback);
		}else {
			return callback(el);
		};
	});
}

console.log(arr3.innerMap(item => {
  return item + 2;
})) // [5, [7, 21, 20], 8, [[9, 21, 33], [16, 20, 22]], 4];

console.log(arr4.innerMap(item => {
  return item + 2;
})) // [8, [6, 10], 13, [11, [12]], 15];
console.log('-----------')






