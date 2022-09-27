import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
 interface user{
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
dup!:user;
dup1!:user;
constructor(private router: Router, private fb: FormBuilder, private userService:UserServicesService){}

  ngOnInit(): void {
   console.log("this is already for registration");
    this.registerFrom=this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl("", Validators.required ), 
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),  //requiredResponse            
      confirm_password: new FormControl("", Validators.required), //requiredResponse       
     })
     


  }
  register() {
    this.dup={
      'username': this.registerFrom.value.username, 
      'first_name': this.registerFrom.value.first_name, 
      'last_name': this.registerFrom.value.last_name,
      'email': this.registerFrom.value.email,
      'password': this.registerFrom.value.password,
    } 
    if(!this.registerFrom.invalid){
     
      if(this.registerFrom.value['password'] === this.registerFrom.value['confirm_password']){
        console.log("succesfully registered");
        this.userService.sendData(this.dup).subscribe(data => {
          this.router.navigate(['/user/login'])
          console.log(data)
          this.registerFrom.reset()
        },err =>{ console.log(err) 
        console.log("error has occerod")});
        console.log(this.registerFrom.value['username']);
      }
      else {
       console.log("Pasword Matched")


    }
  }
    else{
     
      this.router.navigate(['/user/error'])
    }
    

    
    
    }

}
