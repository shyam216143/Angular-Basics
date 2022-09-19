"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function add1(a, b) {
    a + b;
}
const sub = (num1, num2) => num1 - num2; //arrow  function
console.log(sub(5, 3));
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(4, 5));
function add2(a, b, num3) {
    return num3 ? a + b + num3 : a + b;
}
console.log(add2(10, 20)); //30
console.log(add2(10, 20, 30)); //60
const sub1 = (num1, num2, num3 = 15) => num3 - num1 - num2; //arrow  function with required parameter
console.log(sub1(5, 3)); //7 
console.log(sub1(5, 3, 20)); //12
function add3(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add3(1, 2, ...[4, 5, 6])); //18 rest parameters
console.log(add3(1, 2, 4, 5, 6)); //18 rest parameters
// generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5, 6, 7]);
let concatString = getItems(['a', 'b', 'c', 'd']);
console.log(concatResult);
console.log(concatString);
