import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username:string ='';
  show:boolean = true;
  constructor() { }
  password:string = '';
  ngOnInit(): void {
  }
  submit(){
    console.log(this.username);
  }

}
