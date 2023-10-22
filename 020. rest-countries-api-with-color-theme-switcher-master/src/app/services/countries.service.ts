import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import Country from '../interfaces/ICountry';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  // https://restcountries.com/v3.1/name/?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders

  constructor(private http: HttpClient) {}

  getCountryByName(countryName: string, individual: boolean): Observable<Country[]> {
    const fields = individual
      ? 'fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders,maps'
      : 'fields=name,population,region,capital,flags';

    // name,population,region,capital,flags --> necessários para todos os countries
    // name,population,region,capital,flags,subregion,tld,currencies,languages,borders --> pro country detalhado em sua página

    const url = `${this.apiURL}/name/${countryName}?${fields}`;
    return this.http.get<Country[]>(url).pipe(catchError(this.handleError)); // countryName may be invalid
  }

  getBorderFullName(border: string): Observable<{name: string}> {
    const alphaURL = 'https://restcountries.com/v2/alpha/'; // only on the API v2 the API call with the short name (ESP, BRA, JAP) returns the full name. THe most recent version returns only the short name, but we want the country full name! 
    return this.http.get<{name: string}>(`${alphaURL}${border}?fields=name`)
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
