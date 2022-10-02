import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../services/Auth/services.service';
import { UserrProfile } from '../shared/user-auth/userr-profile';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username:string ='';
  show:boolean = true;
 
  constructor(private userService:ServicesService) {
  
   }
   
  ngOnInit(): void {
   
  }
  submit(){
   
  }

}
