import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

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
  constructor(private userService: UserServicesService,private fb:FormBuilder ){}
login!:FormGroup;

  ngOnInit(): void {
  this.login=this.fb.group({
    username:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
  })
  }

  
  loginSubmitForm(){
    if(this.login.valid){
       
    }
    
console.log(this.login.value)
  }

}
