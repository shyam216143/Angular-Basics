import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../model/user-login';
import { UserSignup } from '../model/user-signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logoutSubject = new Subject<boolean>();
	loginSubject = new Subject<any>();
  private host = environment.apiUrl;
  constructor(private http:HttpClient, private route:Router) { }
  login(data:UserLogin):any{
    this.http.post(`${this.host}/login/`, data)
  }
  signup(userSignup: UserSignup): Observable<HttpResponse<any> | HttpErrorResponse> {
		return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/register/`, userSignup);
	}
  
	logout(): void {
		// this.authToken = null;
		// this.authUser = null;
		// this.principal = 0;
		// localStorage.removeItem('authUser');
		// localStorage.removeItem('authToken');
		// this.logoutSubject.next(true);
    this.route.navigate(['/login'])
	}
}
