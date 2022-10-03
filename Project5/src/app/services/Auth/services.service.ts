import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { TokenModel } from 'src/app/shared/user-auth/token-model';
import { UserData } from 'src/app/shared/user-auth/user-data';
import { UserrProfile } from 'src/app/shared/user-auth/userr-profile';
import { Changepasswordmodel } from 'src/app/user/changepassword/changepasswordmodel';
import { Forgotpasswordmodel } from 'src/app/user/user-forgotpassword/forgotpassword';
import { Loginform } from 'src/app/user/user-login/loginform';
import { Registrationform } from 'src/app/user/user-register/registrationform';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private  headers={
    headers:{
      'Authorization':'Bearer '+localStorage.getItem('access-token'),
    }
  }
fulluserData!:UserData;
  constructor(private http:HttpClient) {}
jwtHelper =new JwtHelperService();
userProfile=new BehaviorSubject<UserrProfile |null>(null);
fulluserProfile!:any;
getAccessToken():any{
  var localStorageToken= localStorage.getItem('tokens')
  if(localStorageToken){
    var token=JSON.parse(localStorageToken) as TokenModel
    // var isTokenExpired= this.jwtHelper.isTokenExpired(token.access)
    // if(isTokenExpired){
    //   this.userProfile.next(null)
    //   return ''
    // }
    
   var user_info= this.jwtHelper.decodeToken(token.access) as UserrProfile
   this.userProfile.next(user_info)
   return token.access;
  }
  return ''
}

  registerServices(registerform:any){
    return this.http.post('http://127.0.0.1:8000/register/',registerform)
  }
getuserdata(data:any){
  return this.http.post('http://127.0.0.1:8000/profile/', data)
}
  loginServices(loginForm:Loginform){
    return this.http.post('http://127.0.0.1:8000/login/',loginForm).pipe(
      map(
        (data)=>{
          console.log(data)
          var token = data  as  any
          localStorage.setItem("tokens",JSON.stringify(token.token));
          localStorage.setItem("access-token",token.token.access);
          localStorage.setItem("refresh-token",token.token.refresh);
          console.log(this.jwtHelper.decodeToken(token.token.refresh))
         this.fulluserData={
          email: token.email,
          msg:token.msg,
          token:JSON.stringify(token.token),
          user_id:token.user_id,
          user_name:token.user_name
      
         }
         console.log(this.fulluserData)
          var userData=this.jwtHelper.decodeToken(token.token.access) as UserrProfile
          console.log(userData)
          this.userProfile.next(userData)
          console.log("user_id is:",this.userProfile.value?.user_id)
          return true
        },
        catchError(
          (error)=>{
            console.log(error)
            return of(false)
          }
        )
      )
    )
    
}
refreshToken(payload:TokenModel){
  return this.http.post<TokenModel>('http://127.0.0.1:8000/refreshtoken/', payload);
}
changePassword(payload:Changepasswordmodel){
var  headers: HttpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access-token')
});
  return this.http.post('http://127.0.0.1:8000/changepassword/',payload, {responseType: 'text' as const, headers })
  
}

ForgotPassword(data:any){
return this.http.post('http://127.0.0.1:8000/sendemail/', data).pipe(map((data=>{
console.log(data)
})))
}
}