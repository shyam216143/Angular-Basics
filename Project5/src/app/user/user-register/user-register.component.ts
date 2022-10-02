import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/Auth/services.service';

interface user {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {

  registerFrom!: FormGroup;
  dup!: user;
  dup1!: user;
  constructor(private router: Router, private fb: FormBuilder, private userService: ServicesService) { }

  ngOnInit(): void {
    console.log("this is already for registration");
    this.registerFrom = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),  //requiredResponse            
      password2: new FormControl("", Validators.required), //requiredResponse       
    })



  }
  register() {


    if (!this.registerFrom.invalid) {

      if (this.registerFrom.value['password'] === this.registerFrom.value['password2']) {
        console.log("Password in matched");
        this.userService.registerServices(this.registerFrom.value).subscribe(data => {

          console.log(data)
          this.registerFrom.reset()
          this.router.navigate(['/user/login'])
        }, err => {
          console.log(err)
          console.log("error has occerod")
        });
        console.log(this.registerFrom.value['username']);
      }
      else {
        console.log("Pasword is not Matched re enter your password")


      }
    }
    else {
      alert("please fill all the details in correct manner")
      this.router.navigate(['/user/error'])
    }



  }

}
