import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor( private http:HttpClient ) { }
  getData( ){
    return this.http.get('http://127.0.0.1:8000/1')
  }
  sendData( data:any){
    return this.http.post('http://127.0.0.1:8000/post', data)
  }
}
