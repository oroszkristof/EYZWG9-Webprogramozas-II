import { TestBed } from '@angular/core/testing';

import { LakasokService } from './lakasok.service';

describe('LakasokService', () => {
  let service: LakasokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LakasokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
