import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
    name='shyam';
    age=23;
    child=false
    function1() {
      this.child=!  this.child
    }
  constructor() { 
    console.log("this is consructions")
  }

  ngOnInit(): void {
    console.log("this is the ngOnInt")
  }

}
