import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username:string ='';
  show:boolean = true;
  user_data:any
  is_Authenticated=false

  constructor(private userServices:UserServicesService) {
    this.user_data=this.userServices.userData
    this.is_Authenticated=this.userServices.is_Authenticated

   }
  message:any = "";
  password:string = '';
  ngOnInit(): void {
    
  }
  submit(){
    console.log(this.username);
  }

}
