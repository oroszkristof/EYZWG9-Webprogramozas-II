import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisztracioService } from '../services/regisztracio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisztracio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.css']
})
export class RegisztracioComponent {

  adat = {
    nev: '',
    email: '',
    jelszo: ''
  };

  constructor(private regService: RegisztracioService, private router: Router) {}

  kuldes() {
    this.regService.regisztral(this.adat).subscribe(() => {
      alert("Sikeres regisztráció!");
      this.router.navigate(['/bejelentkezes']);
    });
  }
}
