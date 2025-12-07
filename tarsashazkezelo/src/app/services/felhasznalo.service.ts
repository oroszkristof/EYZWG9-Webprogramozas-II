import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FelhasznaloService {

  private bejelentkezve = new BehaviorSubject<boolean>(false);
  bejelentkezve$ = this.bejelentkezve.asObservable();

  bejelentkeztet() {
    this.bejelentkezve.next(true);
  }

  kijelentkeztet() {
    this.bejelentkezve.next(false);
  }

  isBejelentkezve(): boolean {
    return this.bejelentkezve.value;
  }
}
