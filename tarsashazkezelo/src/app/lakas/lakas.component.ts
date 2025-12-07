import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lakas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lakas.component.html',
  styleUrls: ['./lakas.component.css']
})
export class LakasComponent implements OnInit {

  lakok: any[] = [];

  ujLako = {
    felhasznaloId: '',
    nev: '',
    lakasszam: '',
    emelet: '',
    telefonszam: '',
    koltseg: '',
    megjegyzes: ''
  };

  ujFormLathato = false;

  szerkesztesMod = false;
  modositando: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLakok();
  }

  ujLakoMegnyit() {
    this.ujFormLathato = true;
  }

  getLakok() {
    this.http.get<any[]>('http://localhost:3000/api/lakok')
      .subscribe(res => this.lakok = res);
  }

  addLako() {
    this.http.post('http://localhost:3000/api/lakok', this.ujLako)
      .subscribe(() => {
        alert("Lakó sikeresen felvéve!");

        this.ujLako = {
          felhasznaloId: '',
          nev: '',
          lakasszam: '',
          emelet: '',
          telefonszam: '',
          koltseg: '',
          megjegyzes: ''
        };

        this.ujFormLathato = false;
        this.getLakok();
      });
  }

  torolLako(id: number) {
    if (!confirm("Biztos törölni szeretnéd?")) return;

    this.http.delete('http://localhost:3000/api/lakok/' + id)
      .subscribe(() => {
        alert("Lakó törölve!");
        this.getLakok();
      });
  }

  szerkesztLako(lako: any) {
    this.szerkesztesMod = true;
    this.modositando = { ...lako };
  }

  mentModositas() {
    this.http.put('http://localhost:3000/api/lakok/' + this.modositando.id, this.modositando)
      .subscribe(() => {
        alert("Lakó módosítva!");
        this.szerkesztesMod = false;
        this.getLakok();
      });
  }

}
