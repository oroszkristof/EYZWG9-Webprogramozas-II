import { TestBed } from '@angular/core/testing';

import { BejelentesekService } from './bejelentesek.service';

describe('BejelentesekService', () => {
  let service: BejelentesekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BejelentesekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
