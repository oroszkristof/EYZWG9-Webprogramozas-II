import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Lakas {
  id?: number;
  felhasznaloId: number;
  nev: string;
  lakasszam: number;
  emelet: number;
  telefonszam: string;
  koltseg: number;
  megjegyzes: string;
}

@Injectable({ providedIn: 'root' })
export class LakasokService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/lakok';

  
  private addUrl = 'http://localhost:3000/api/LakoHozzaadas';


  getLakasok(): Observable<Lakas[]> {
    return this.http.get<Lakas[]>(this.apiUrl);
  }

 
  addLakas(lakas: Lakas): Observable<Lakas> {
    return this.http.post<Lakas>(this.addUrl, lakas);
  }

  
  updateLakas(id: number, lakas: Lakas): Observable<Lakas> {
    return this.http.put<Lakas>(`${this.apiUrl}/${id}`, lakas);
  }


  deleteLakas(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
