import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient, private route:Router) { }
  gender:string = ''
  registerFrom!:FormGroup
  registerFrom1!:FormGroup
  email:string=''
  username:string=''
  password: string=''
  repassword:string=''
  ngOnInit(): void {
    this.registerFrom=this.fb.group({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      

    })

    this.registerFrom1=this.fb.group({
      email:this.email,
      username:this.username,
      password:this.password,
      repassword:this.repassword,
      

    })
  }
  register(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.registerFrom1.value).subscribe(data=>{
      alert('successfully registered')
      this.registerFrom.reset()
      this.route.navigate(['user/login']);
    }, err=>{
      alert("error has occered")
    })
  }

}
