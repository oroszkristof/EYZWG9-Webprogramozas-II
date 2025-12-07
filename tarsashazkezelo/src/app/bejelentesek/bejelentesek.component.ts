import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bejelentesek',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bejelentesek.component.html',
  styleUrls: ['./bejelentesek.component.css']
})
export class BejelentesekComponent implements OnInit {

  bejelentesek: any[] = [];

  ujBejelentes = {
    lakoId: '',
    tipus: '',
    leiras: ''
  };

  ujFormLathato = false;

  szerkesztesMod = false;
  modositando: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBejelentesek();
  }

  ujBejelentesMegnyit() {
    this.ujFormLathato = true;
  }

  getBejelentesek() {
    this.http.get<any[]>('http://localhost:3000/api/bejelentesek')
      .subscribe(res => this.bejelentesek = res);
  }

  addBejelentes() {
    this.http.post('http://localhost:3000/api/bejelentesek', this.ujBejelentes)
      .subscribe(() => {
        alert("Bejelentés sikeresen felvéve!");

        this.ujBejelentes = { lakoId: '', tipus: '', leiras: '' };
        this.ujFormLathato = false;
        this.getBejelentesek();
      });
  }

  torol(id: number) {
    if (!confirm("Biztos törölni szeretnéd?")) return;

    this.http.delete('http://localhost:3000/api/bejelentesek/' + id)
      .subscribe(() => {
        alert("Bejelentés törölve!");
        this.getBejelentesek();
      });
  }

  szerkeszt(bejelentes: any) {
    this.szerkesztesMod = true;
    this.modositando = { ...bejelentes };
  }

  mentModositas() {
    this.http.put('http://localhost:3000/api/bejelentesek/' + this.modositando.id, this.modositando)
      .subscribe(() => {
        alert("Bejelentés módosítva!");
        this.szerkesztesMod = false;
        this.getBejelentesek();
      });
  }

}
