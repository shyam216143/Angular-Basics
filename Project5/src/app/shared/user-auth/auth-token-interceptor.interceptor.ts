import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { TokenModel } from './token-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServicesService } from 'src/app/services/Auth/services.service';
import { UserrProfile } from './userr-profile';
import { Router } from '@angular/router';

@Injectable()
export class AuthTokenInterceptorInterceptor implements HttpInterceptor {
  

  constructor(private jwtHelper: JwtHelperService, private userService: ServicesService, private route:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if(request.url.indexOf('login') > -1  || request.url.indexOf('refresh') > -1 || request.url.indexOf('register')>-1||request.url.indexOf('forgotpassword')>=-1){
      console.log(request.url.indexOf('forgotpassword')); 
      return next.handle(request);
    }
    const localStorageToken = localStorage.getItem('tokens')
    var token: TokenModel;
    if (localStorageToken) {
      token = JSON.parse(localStorageToken) as TokenModel
      var isTokenExpired = this.jwtHelper.isTokenExpired(token.access)
      if (!isTokenExpired) {
        return next.handle(request);
      }
      else {
        return this.userService.refreshToken(token).pipe(
          switchMap((newToken: any) => {

            newToken['refresh'] = token.refresh
            console.log("after expired then converted to", newToken)
            localStorage.setItem('tokens', JSON.parse(newToken))
            localStorage.setItem('access-token', JSON.parse(newToken.access))
            localStorage.setItem('refresh-token', JSON.parse(newToken.refresh))

            var userInfo = this.jwtHelper.decodeToken(newToken.access) as UserrProfile;
            this.userService.userProfile.next(userInfo)
            this.userService.getuserdata(userInfo.user_id)

            const transformreq = request.clone(
              {
                headers: request.headers.set(
                  'Authorization', `Bearer ${newToken.access}`
                )
              }
            );
            return next.handle(transformreq)
          }),
          catchError((error)=>{
            localStorage.removeItem('tokens')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('access-token')
            this.userService.userProfile.next(null)
            this.route.navigate(['user/login'])
            return throwError(()=>'invalid call')
          })
        )

      }
    }

    return throwError(()=>'invalid call')
  }
}
