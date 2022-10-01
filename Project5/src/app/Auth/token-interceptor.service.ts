import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { UserServicesService } from '../services/user-services.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private inject :Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(UserServicesService)
    let jwttoken=this.AddTokenHeader(req, authservice.getToken())
    console.log("this is inceptor token",jwttoken)
    return next.handle(jwttoken).pipe(
      catchError((err:any) => { 
        if(err.data.status === 404 || err.data.status==401) {
          // need to implement logout methods
          // authservice.logout1()
          // console.log("hello log out")
          return this.handleRefreshToken(req,next)

          // refresh token logic

        }
        return throwError("error occured at token intercept")
      })
    );
  }

  handleRefreshToken(req: HttpRequest<any>, next: HttpHandler){
    let authservice=this.inject.get(UserServicesService)
    return authservice.generateRefreshToken().pipe(
      switchMap((data:any)=>{
        authservice.saveToken(data);
        return next.handle(this.AddTokenHeader(req, data.jwttoken))
      }),
      catchError(errordata=>{
        authservice.logout1();
        return throwError(errordata)
      })
    )
  }







  AddTokenHeader(request: HttpRequest<any>, token:any){
  return request.clone({
    headers:request.headers.set('Authorization', 'Bearer '+token)
  });
  }

    
}
