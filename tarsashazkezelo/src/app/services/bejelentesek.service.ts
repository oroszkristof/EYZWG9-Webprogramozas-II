import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BejelentesekService {

  private apiUrl = 'http://localhost:3000/api/bejelentesek';

  constructor(private http: HttpClient) {}

  getBejelentesek(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  hozzaadBejelentest(uj: any): Observable<any> {
    return this.http.post(this.apiUrl, uj);
  }
}
