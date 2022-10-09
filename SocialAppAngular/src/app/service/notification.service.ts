import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private host = environment.apiUrl;

	constructor(private httpClient: HttpClient) { }
  getNotifications(page: number, size: number): Observable<Notification[]|any | HttpErrorResponse> {
		const reqParams = new HttpParams().set('page', page).set('size', size);
		return this.httpClient.get<Notification[] | HttpErrorResponse>(`${this.host}/notifications`, { params: reqParams });
	}
  markAllSeen():  Observable<any | HttpErrorResponse> {
		return this.httpClient.post<any | HttpErrorResponse>(`${this.host}/notifications/mark-seen`, null);
	}


}
