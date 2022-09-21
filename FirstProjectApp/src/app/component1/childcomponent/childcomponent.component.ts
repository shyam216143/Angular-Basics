import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emp } from '../component';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {
  @Input() childemp:emp[]=[];
  @Output() moveparentemp=new EventEmitter<emp>();
    constructor() { }
    bool1=false;
  ngOnInit(): void {
  }

exp!:emp;

fun1(i:emp){
this.bool1=!this.bool1
this.moveparentemp.emit(i)

}
}
