import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialist1Component } from './specialist1.component';

describe('Specialist1Component', () => {
  let component: Specialist1Component;
  let fixture: ComponentFixture<Specialist1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Specialist1Component]
    });
    fixture = TestBed.createComponent(Specialist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
