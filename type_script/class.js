"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id;
class Employee {
    constructor(id, name, address) {
        _id.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        this.name = name;
    }
    get empId() {
        return __classPrivateFieldGet(this, _id);
    }
    set empId(id) {
        __classPrivateFieldSet(this, _id, id);
    }
    static getcount() {
        return 100;
    }
    getNameWithAddres() {
        // return this.name +"is from  "+this.address
        return `${this.name} is from ${this.address}`;
    }
}
_id = new WeakMap();
class manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let emp = new Employee(2, 'sai', 'vizag');
// emp.id = 1;
// emp.name='shyam';
// emp.address='hyderabad';
emp.empId = 101;
console.log(emp);
console.log(emp.empId); //101
console.log(Employee.getcount()); //100
let address = emp.getNameWithAddres();
console.log(address);
let man = new manager(2, 'sai', 'vizag');
console.log(man);
let address1 = man.getNameWithAddres();
console.log(address1);
