import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BelepesService } from '../services/belepes.service';
import { Router } from '@angular/router';
import { FelhasznaloService } from '../services/felhasznalo.service';

@Component({
  selector: 'app-belepes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './belepes.component.html',
  styleUrls: ['./belepes.component.css']
})
export class BelepesComponent {

  adat = {
    email: '',
    jelszo: ''
  };

  hibauzenet = '';

  constructor(
    private belepesService: BelepesService,
    private router: Router,
    private felhasznalo: FelhasznaloService
  ) {}

  belepes() {
    this.belepesService.belepes(this.adat).subscribe({
      next: () => {
        this.felhasznalo.bejelentkeztet();
        alert("Sikeres bejelentkezés!");
        this.router.navigate(['/fooldal']);
      },
      error: () => {
        this.hibauzenet = "Hibás email vagy jelszó!";
      }
    });
  }
}
