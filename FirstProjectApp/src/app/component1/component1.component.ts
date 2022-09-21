import { Component, OnInit } from '@angular/core';
import { emp } from './component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
    name='shyam';
    age=23;
    child=false;
    bool=true;
    myemp:emp[]=[];
    function1() {
      this.child=!  this.child
    }
  constructor() { 
    console.log("this is consructions")
  }

  ngOnInit(): void {
    console.log("this is the ngOnInt")
    this.myemp=[
      {
        id:102,
        name:'shyam',
        age:22,
        address:'Hyderabad'
      },
      {
        id:103,
        name:'rajesh',
        age:21,
        address:'Nalgonda'
      },
      {
        id:104,
        name:'harish',
        age:23,
        address:'beemili'
      },
      {
        id:105,
        name:'mahesh',
        age:20,
        address:'vizag'
      },
      {
        id:106,
        name:'ganesh',
        age:27,
        address:'kurnool'
      },

    ]

  }
  
   
  

  myemp1!:emp;
  fun1(i:emp){
    this.bool=!  this.bool  
    this.myemp1=i

  }
}
