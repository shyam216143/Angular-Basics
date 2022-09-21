// import { Login  } from  './interface';
// import * as UserLogin from './interface';
interface Address  {
    street:string;
    city:string;
    state:string;
    pin:number;
 };
class Employee{
 #id:number;
 protected name:string;   
 address :Address

 get empId(): number{
    return this.#id
 }
 set empId(id:number){
    this.#id= id;
 }
 static getcount():number{
    return 100;
 }
 constructor(id:number, name:string, address:Address){
    this.#id=id;
    this.name=name;
    this.address=address;   
 }
 getNameWithAddres():string{
    // return this.name +"is from  "+this.address
    return `${this.name } is from ${this.address}`;

 }
}


class manager extends Employee{
    constructor(id:number, name:string, address:Address){
        super(id, name,address);
    }
//     getNameWithAddres():string{
//         // return this.name +"is from  "+this.address
//         return `${this.name } is manager from ${this.address}`;
    
//      }
}



let emp = new Employee(2,'sai',{street:'ramnagar',city:'vizag',state:'Ap',pin:500061});
// emp.id = 1;
// emp.name='shyam';
// emp.address='hyderabad';

emp.empId=101;
console.log(emp)
console.log(emp.empId) //101


console.log(Employee.getcount()) //100


let address = emp.getNameWithAddres()
console.log(address)


let man = new manager(2,'sai',{street:'ramnagar',city:'vizag',state:'Ap',pin:500061});
console.log(man)
let address1 = man.getNameWithAddres()
console.log(address1)
