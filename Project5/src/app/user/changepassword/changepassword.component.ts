import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/Auth/services.service';
import { UserData } from 'src/app/shared/user-auth/user-data';
import { UserrProfile } from 'src/app/shared/user-auth/userr-profile';
import { ProfileService } from '../user-profile/profile.service';
import { Changepasswordmodel } from '../changepassword/changepasswordmodel';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  success_message: string = ''
  error_message: any = ''

  private headers = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
    }
  }
  userdata?: number;
  changePasswordForm!: FormGroup;
  userdetatais!: UserData;
  changepasswordData!: Changepasswordmodel
  constructor(private fb: FormBuilder, private userService: ServicesService, private userProfile: ProfileService, private route:Router) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      old_password: new FormControl('', [Validators.required]),
      new_password: new FormControl('', [Validators.required]),
      confirm_new_password: new FormControl('', [Validators.required]),
    })

    this.userService.userProfile.subscribe(data => {
      this.userdata = data?.user_id
      console.log("user id is:", this.userdata)

    })


  }
  changepassword() {
    if (this.changePasswordForm.valid) {
      this.userProfile.getProfileData().subscribe(data => {
        this.changepasswordData = {
          email: data.email,
          password: this.changePasswordForm.value.new_password,
          password2: this.changePasswordForm.value.confirm_new_password

        }
        console.log(this.changepasswordData)
        console.log(data.email)
        this.userService.changePassword(this.changepasswordData).subscribe(data => {
          console.log(data)
          this.success_message = JSON.parse(data).msg
          
          setTimeout(()=>{
            this.route.navigate(['user/admin'])
          }, 5000)
        },
        (err)=>{
          this.error_message=err
          
          
        })
        

      })
      console.log(this.changePasswordForm.value)
    }
  }
}
