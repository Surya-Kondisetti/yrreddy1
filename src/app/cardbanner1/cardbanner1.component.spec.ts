import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbanner1Component } from './cardbanner1.component';

describe('Cardbanner1Component', () => {
  let component: Cardbanner1Component;
  let fixture: ComponentFixture<Cardbanner1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardbanner1Component]
    });
    fixture = TestBed.createComponent(Cardbanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
