"use strict";
var user = {
    name: 'shyam',
    age: 22,
    id: 25,
    email: 'shyam@gmail.com'
};
let employee1 = {
    name: 'shyam',
    age: 22,
    id: 25,
    email: 'shyam@gmail.com',
    salary: 121032
};
console.log(user);
console.log(employee1);
console.log();

export interface Login  {
    login():User;
}