import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user_data: any;

// showSpinner: any;
  
//   postdata= {
//     "password": "pbkdf2_sha256$390000$G8VgxOWBpBYaA86MsQaoVY$UXRl8x1gVTH+Q8MI1audaf3JJeAqUZY8oK9ZS3Tt784=",
//     "username": "logee12s3erehhgggaain",
//     "first_name": "logfeg1wwxffxzz23in",
//     "last_name": "kussmffacccr",
//     "email": "logcaaxasswxccicccn@gmail.com",
    
// }
//   login: FormGroup<{ Username: FormControl<string | null>; password: FormControl<string | null>; }>;
// 
//   username : string ="";
//   password : string ="";
//   password1 : any ="";
//   show: boolean= false;
//   Login(){
  // console.log("user name is " + this.username)
  // this.clear();
//   this.userService.getData().subscribe(data => { 
//       this.password1=data
//     console.log(data)},(error)=>{
//     console.log("error haa occured");
// })
// this.userService.sendData(this.postdata).subscribe(data => { 

//   console.log(data)},(error)=>{
  
//   console.log("error haa occured");
// })
//   }
  // clear(){
  // this.username ="";
  // this.password = "";
  // this.show = true;
  // }
  constructor(private userService: UserServicesService,private fb:FormBuilder , private route :Router, private activateRoute: ActivatedRoute){}
login!:FormGroup;
message:any={}
  ngOnInit(): void {
    this.activateRoute.queryParams
    .subscribe((params) => {
      this.message = params;
    }
  );
  this.login=this.fb.group({
    email:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
  })
  }
  x={
    "email":"login@gmail.com",
    "password":"1234"
}

  
  loginSubmitForm(){
    if(this.login.valid){
       this.userService.login(this.login.value).subscribe(data => { this.user_data = data;
      console.log(data);
      this.userService.is_Authenticated = true;
      this.route.navigate(['/user/Admin']);
      this.userService.userData=this.user_data;
      },err => { console.log("error has occured while connectiong"); });
    }
    
   console.log(this.login.value)
  }

}
