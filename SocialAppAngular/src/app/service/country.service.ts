import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private host = environment.apiUrl;

	constructor(private httpClient: HttpClient) { }

	getCountryList(): Observable<|any | HttpErrorResponse> {
		return this.httpClient.get<Country[] | HttpErrorResponse>('https://trial.mobiscroll.com/content/countries.json');
	}
}
