import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/Auth/services.service';
import { TokenModel } from './token-model';
import { UserrProfile } from './userr-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private userService:ServicesService, private jwtHelper:JwtHelperService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var userProfile= this.userService.userProfile.getValue()
    if(!userProfile){
      var localTokenString=localStorage.getItem('tokens')
      if(localTokenString){
        var token=JSON.parse(localTokenString) as TokenModel
        var userInfo = this.jwtHelper.decodeToken(token.access) as UserrProfile;
        this.userService.userProfile.next(userInfo)
        userProfile=userInfo;

      }

    }

    if((userProfile?.user_id??0)>0 && localStorage.getItem('tokens')!=null){
      if(route.data['requiredAuth']==false){
        // if(localStorage.length<=0){
        //   this.route.navigate(['/user/login'])
        // }
        alert()
        this.route.navigate(['/user/Admin'])
        return false

      }
      return true
    }
    else{
      if(route.data['requiredAuth']==true){
        this.route.navigate(['/user/login'])
        return false

      }
      return true;
    }
     
  }
  
}
