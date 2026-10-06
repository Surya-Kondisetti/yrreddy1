import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabfieldComponent } from './labfield.component';

describe('LabfieldComponent', () => {
  let component: LabfieldComponent;
  let fixture: ComponentFixture<LabfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabfieldComponent]
    });
    fixture = TestBed.createComponent(LabfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
