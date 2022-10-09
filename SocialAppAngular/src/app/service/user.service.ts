import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResetPassword } from '../model/reset-password';
import { UpdateUserEmail } from '../model/update-user-email';
import { UpdateUserInfo } from '../model/update-user-info';
import { UpdateUserPassword } from '../model/update-user-password';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;
	// private jwtService = new JwtHelperService();
  constructor(private httpClient: HttpClient) { }




  updateUserInfo(updateUserInfo: UpdateUserInfo): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/account/update/info`, updateUserInfo);
	}
  updateUserEmail(updateUserEmail: UpdateUserEmail): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/account/update/email`, updateUserEmail);
	}

	updateUserPassword(updateUserPassword: UpdateUserPassword): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/account/update/password`, updateUserPassword);
	}
  resetPassword(token: string, resetPassword: ResetPassword): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/reset-password/${token}`, resetPassword);
	}

}
