import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services/Auth/services.service';
import { AuthGuardGuard } from './shared/user-auth/auth-guard.guard';
import { UserData } from './shared/user-auth/user-data';
import { UserrProfile } from './shared/user-auth/userr-profile';
import { ProfileService } from './user/user-profile/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnChanges{



  title = 'Project5';
  fulluserprofile!:UserData;
  username:string="No username";
  constructor(private userService:ServicesService, private profileServices:ProfileService, private route:Router,) {
   
     }
     
  

  userprofile?:UserrProfile | null;
  fullUserdata:any
 ngOnInit(): void {
  if(localStorage.getItem("tokens")!=null){
  this.userService.userProfile.subscribe(data=>{
   this.userprofile=data 
  })
}
   
 }
  ngOnChanges(changes: SimpleChanges): void {
   
}
is_Authenticated():Boolean {
return false
  }
  logout() {
    localStorage.clear()
  this.userprofile=null
    this.route.navigate(['user/login'])
   
    }
}