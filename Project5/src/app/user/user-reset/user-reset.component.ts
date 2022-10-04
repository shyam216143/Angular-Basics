import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/Auth/services.service';

@Component({
  selector: 'app-user-reset',
  templateUrl: './user-reset.component.html',
  styleUrls: ['./user-reset.component.scss']
})
export class UserResetComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: ServicesService, private linkrouter: ActivatedRoute, private http: HttpClient, private route:Router) { }
  resetForm!: FormGroup;
  uid: string = ''
  token: string = ''
  success_message!:any;
  error_message!:any;
  ngOnInit(): void {
    

    this.resetForm = this.fb.group({
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    })
  }
  resetpassword() {
    if (this.resetForm.valid) {
    console.log(this.uid,"dghwuh")
    this.linkrouter.params.subscribe((data) => {
      console.log(data['uid'])
      console.log(data['token'])
      return this.http.post('http://127.0.0.1:8000/resetpassword/' + data['uid'] + '/' + data['token'] + '/', this.resetForm.value)
      .subscribe((data) => {
       this.success_message=data
        console.log(data)
        this.resetForm.reset()
        setTimeout(() => {
          this.route.navigate(['user/login'])
        }, 4000);
      },
      error=>{
        this.error_message="  Error occurred While Reseting  the Password"
        console.log(error,"error occured toresend")
      
      }
      )
    })
      


    }
    return

  }


}
