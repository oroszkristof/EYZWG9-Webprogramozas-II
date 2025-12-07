import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisztracioService {

private apiUrl = 'http://localhost:3000/api/regisztracio';

  constructor(private http: HttpClient) {}

  regisztral(adatok: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, adatok);
  }
}
