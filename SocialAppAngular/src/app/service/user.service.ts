import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResetPassword } from '../model/reset-password';
import { UpdateUserEmail } from '../model/update-user-email';
import { UpdateUserInfo } from '../model/update-user-info';
import { UpdateUserPassword } from '../model/update-user-password';
import { User } from '../model/user';
import { UserResponse } from '../model/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;
	// private jwtService = new JwtHelperService();
  constructor(private httpClient: HttpClient) { }
  forgotPassword(email: string): Observable<any | HttpErrorResponse> {
	const reqParams = new HttpParams().set('email', email);
	return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/forgot-password`, null, { params: reqParams });
}



  updateUserInfo(updateUserInfo: any): any {
		return this.httpClient.post<any >(`${this.host}/update/`, updateUserInfo);
	}
  updateUserEmail(updateUserEmail: UpdateUserEmail): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/change-email/`, updateUserEmail);
	}

	updateUserPassword(updateUserPassword: UpdateUserPassword): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/change-password/`, updateUserPassword);
	}
  resetPassword(token: string, resetPassword: ResetPassword): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/reset-password/${token}`, resetPassword);
	}

	getUserSearchResult(key: string, page: number, size: number): Observable<UserResponse[]|any | HttpErrorResponse> {
		const reqParams = new HttpParams().set('key', key).set('page', page).set('size', size);
		return this.httpClient.get<UserResponse[] | HttpErrorResponse>(`${this.host}/users/search`, { params: reqParams });
	}
	followUser(userId: number): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/account/follow/${userId}`, null);
	}
	unfollowUser(userId: number): Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/account/unfollow/${userId}`, null);
	}


	updateProfilePhoto(profilePhoto: File): Observable<User | HttpErrorResponse> {
		const formData = new FormData();
		formData.append('profilePhoto', profilePhoto);
		return this.httpClient.post<User | HttpErrorResponse>(`${this.host}/account/update/profile-photo`, formData);
	}
	updateCoverPhoto(coverPhoto: File): Observable<User | HttpErrorResponse> {
		const formData = new FormData();
		formData.append('coverPhoto', coverPhoto);
		return this.httpClient.post<User | HttpErrorResponse>(`${this.host}/account/update/cover-photo`, formData);
	}
	getUserFollowingList(userId: number, page: number, size: number): Observable<UserResponse[] |any | HttpErrorResponse> {
		const reqParams = new HttpParams().set('page', page).set('size', size);
		return this.httpClient.get<UserResponse[] | HttpErrorResponse>(`${this.host}/users/${userId}/following`, { params: reqParams });
	}

	getUserFollowerList(userId: number, page: number, size: number): Observable<UserResponse[] |any | HttpErrorResponse> {
		const reqParams = new HttpParams().set('page', page).set('size', size);
		return this.httpClient.get<UserResponse[] | HttpErrorResponse>(`${this.host}/users/${userId}/follower`, { params: reqParams });
	}
}
