import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakasComponent } from './lakas.component';

describe('LakasComponent', () => {
  let component: LakasComponent;
  let fixture: ComponentFixture<LakasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LakasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LakasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
