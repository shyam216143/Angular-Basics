'use strict';
let fname : string;  //string
fname='shyam';
let newname = fname.toUpperCase();

console.log(newname)
// fname=10


let age :number;  //number
age=25;
console.log(age)

let result = parseInt('25')
console.log(result)
console.log(typeof(result))


let isvalid : boolean=false;  //boolean
console.log(isvalid)




let employee : string[];
let depart : Array<string>;
employee=['shyam','sai', 'rajesh','mahesh'];
let numlist : Array<number>;
numlist=[1,2,3,4,50];
let result1 = numlist.filter((num)=> num>2);
console.log(result1)

let result2 = numlist.find((num)=>num===2)
console.log(result2)


let sum = numlist.reduce((acc,num)=>(acc+num));
console.log(sum)


const enum Color{
    red, green, blue
}

let c :Color= Color.blue;
 console.log(typeof(c))


//  tuples

let swapnums : [number, number];


function swapnumbers(num1:number, num2:number):[number, number]{
  return [num2, num1];
}

swapnums = swapnumbers(20,30);
swapnums[0];
swapnums[1];

let department:any;  //any 
department='cse';
department=10;
department=false;
