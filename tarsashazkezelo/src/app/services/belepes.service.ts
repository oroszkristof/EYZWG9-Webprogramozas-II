import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BelepesService {

  private apiUrl = 'http://localhost:3000/api/bejelentkezes';

  constructor(private http: HttpClient) {}

  belepes(adat: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, adat);
  }
}
