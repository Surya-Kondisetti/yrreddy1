import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcompany2Component } from './aboutcompany2.component';

describe('Aboutcompany2Component', () => {
  let component: Aboutcompany2Component;
  let fixture: ComponentFixture<Aboutcompany2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aboutcompany2Component]
    });
    fixture = TestBed.createComponent(Aboutcompany2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
