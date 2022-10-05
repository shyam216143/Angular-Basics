import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
show: any;

  constructor(private http:HttpClient) { }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }



  
  login(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
    this.http.post('http://127.0.0.1:8000/login/',this.loginForm.value, {withCredentials: true}).subscribe((data)=>{
      console.log(data)
      
    })
 
  }


}
}
