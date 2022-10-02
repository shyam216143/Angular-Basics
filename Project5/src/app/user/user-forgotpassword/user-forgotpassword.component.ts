import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/Auth/services.service';

@Component({
  selector: 'app-user-forgotpassword',
  templateUrl: './user-forgotpassword.component.html',
  styleUrls: ['./user-forgotpassword.component.scss']
})
export class UserForgotpasswordComponent implements OnInit {

ForgotPasswordForm!:FormGroup

  constructor(private fb:FormBuilder, private userServices:ServicesService) {
    this.ForgotPasswordForm = this.fb.group({
      email:new FormControl('',[Validators.email, Validators.required])
    })
   }

  ngOnInit(): void {
  }
  changepasswoprd() {
    if(this.ForgotPasswordForm.valid){
      this.userServices
    }
    }
}
