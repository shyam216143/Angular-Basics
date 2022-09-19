'use strict';
let fname; //string
fname = 'shyam';
let newname = fname.toUpperCase();
console.log(newname);
// fname=10
let age; //number
age = 25;
console.log(age);
let result = parseInt('25');
console.log(result);
console.log(typeof (result));
let isvalid = false; //boolean
console.log(isvalid);
let employee;
let depart;
employee = ['shyam', 'sai', 'rajesh', 'mahesh'];
let numlist;
numlist = [1, 2, 3, 4, 50];
let result1 = numlist.filter((num) => num > 2);
console.log(result1);
let result2 = numlist.find((num) => num === 2);
console.log(result2);
let sum = numlist.reduce((acc, num) => (acc + num));
console.log(sum);
let c = 2 /* Color.blue */;
console.log(typeof (c));
//  tuples
let swapnums;
function swapnumbers(num1, num2) {
    return [num2, num1];
}
swapnums = swapnumbers(20, 30);
swapnums[0];
swapnums[1];
let department; //any 
department = 'cse';
department = 10;
department = false;
