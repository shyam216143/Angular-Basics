import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private  headers={
    headers:{
      'Authorization':'Bearer '+localStorage.getItem('access-token'),
    }
  }
  constructor(private  http : HttpClient,) {

   }
  
   getProfileData(){
   console.log(this.headers)
    return this.http.get<Profile>('http://127.0.0.1:8000/profile/', this.headers)
   }
}
