import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalsfieldComponent } from './medicalsfield.component';

describe('MedicalsfieldComponent', () => {
  let component: MedicalsfieldComponent;
  let fixture: ComponentFixture<MedicalsfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalsfieldComponent]
    });
    fixture = TestBed.createComponent(MedicalsfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
