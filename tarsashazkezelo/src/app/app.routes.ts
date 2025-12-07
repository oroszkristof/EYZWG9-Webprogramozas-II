import { Routes } from '@angular/router';
import { FooldalComponent} from './fooldal/fooldal.component';
import { BejelentesekComponent } from './bejelentesek/bejelentesek.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';
import { BelepesComponent } from './belepes/belepes.component';
import { LakasComponent } from './lakas/lakas.component';



export const routes: Routes = [
  { path: '', redirectTo: 'fooldal', pathMatch: 'full' },
  { path: 'belepes', component: BelepesComponent},
  {path: 'fooldal', component: FooldalComponent},
  {path: 'lakas', component: LakasComponent},
  {path: 'bejelentesek', component: BejelentesekComponent},
  { path: 'regisztracio', component: RegisztracioComponent }
];
