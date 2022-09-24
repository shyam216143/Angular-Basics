import { Component, OnInit } from '@angular/core';
import { login } from '../auth';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLoading:Boolean=false;

  form:login={
    email:"",
    password:'',
  }
  constructor(private authService: AuthService) { }
  email:string='';

  ngOnInit(): void {
  }
  submitLoginForm(){
    
this.authService.login(this.form);

    
  }
  isloading(){
    return this.authService.isLoading
  }

}
