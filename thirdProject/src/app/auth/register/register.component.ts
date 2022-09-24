import { Component, OnInit } from '@angular/core';
import { register } from '../auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

isPasswordMatched:Boolean=true;
  form:register={
    email:"",
    password:'',
    confirm_password:'',
  }
  constructor(private authService: AuthService) { }
  


  ngOnInit(): void {
  }
  submitRegisterForm(){
    // alert(this.form.email)
   this.authService.register(this.form)
    console.log(this.form)
  }
  isLoading(){
    return this.authService.isLoading;
  }

}
