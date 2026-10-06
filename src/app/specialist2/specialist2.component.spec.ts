import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialist2Component } from './specialist2.component';

describe('Specialist2Component', () => {
  let component: Specialist2Component;
  let fixture: ComponentFixture<Specialist2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Specialist2Component]
    });
    fixture = TestBed.createComponent(Specialist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
