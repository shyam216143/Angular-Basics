import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/Auth/services.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
onCheckboxChange($event: MatCheckboxChange) {
throw new Error('Method not implemented.');
}

  constructor(private fb:FormBuilder , private route :Router, private activateRoute: ActivatedRoute, private userservice:ServicesService){

  }
login!:FormGroup;
message:any={}
ApiMessage:any={}
rememberMe!:boolean;
sending:boolean=false

  ngOnInit(): void {
    this.login= this.fb.group(
      {
      email:new FormControl('',Validators.email),
      password:new FormControl('', Validators.required)
      }
    )
  
  }


  
  loginSubmitForm(){
this.userservice.loginServices(this.login.value).subscribe(
  (data)=>{
    if(data){
      alert("successfilly registerd")
      this.route.navigate(['/user/Admin'])
    }
    else{
      alert("failed to access")
    }
  }
)
   
  }

}
