import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UserServicesService {

  userData:any;
  is_Authenticated=false
  // private _is_loggedin =new BehaviorSubject<boolean>(false);
  // is_loggedin= this._is_loggedin.asObservable();
  constructor( private http:HttpClient, private route:Router) { }
  getData( ){
    return this.http.get('http://127.0.0.1:8000/1')
  }
  getDataSingle(data:string ){
    return this.http.get('http://127.0.0.1:8000/1')
  }
  sendData( data:any){
    return this.http.post('http://127.0.0.1:8000/modelview/viewmodelset/', data)
  }
  login(data:any){
    return this.http.post('http://127.0.0.1:8000/login/', data).pipe(tap((response:any)=>{
      console.log(response.token);
    }))
  }
  register(data:any){
    return this.http.post('http://127.0.0.1:8000/register/',data)
  }
  logout() {
    return this.is_Authenticated=false
    
  }
}
