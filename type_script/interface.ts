interface User{
    name:string;
    age:number;
    id:number;
    email:string;

}
var user:User = {
    name:'shyam',
    age:22,
    id:25,
    email:'shyam@gmail.com'
}


interface employee extends User{
salary:number;
}

let employee1:employee = {
    name:'shyam',
    age:22,
    id:25,
    email:'shyam@gmail.com',
    salary:121032
}
console.log(user)
console.log(employee1)
console.log()