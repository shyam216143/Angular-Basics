import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ServicesService } from 'src/app/services/Auth/services.service';

@Component({
  selector: 'app-user-forgotpassword',
  templateUrl: './user-forgotpassword.component.html',
  styleUrls: ['./user-forgotpassword.component.scss']
})
export class UserForgotpasswordComponent implements OnInit {

ForgotPasswordForm!:FormGroup
message!:any;
back:boolean=false
justclicked:boolean = false;
  constructor(private fb:FormBuilder, private userServices:ServicesService) {
    this.ForgotPasswordForm = this.fb.group({
      email:new FormControl('',[Validators.email, Validators.required])
    })
   }

  ngOnInit(): void {
  }
  changepassword() {
   

    if(this.ForgotPasswordForm.valid){
    
      this.userServices.ForgotPassword(this.ForgotPasswordForm.value).subscribe(data=>{
        console.log(data)
        this.message = data
        this.justclicked=true
        this.back=true

        
      },
      (error)=>{
        this.message="  Error occurred While Sending the data"
        console.log(error,"error occured to send the data at API")
      })
    }
    }
}
