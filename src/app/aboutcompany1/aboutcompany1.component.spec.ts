import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcompany1Component } from './aboutcompany1.component';

describe('Aboutcompany1Component', () => {
  let component: Aboutcompany1Component;
  let fixture: ComponentFixture<Aboutcompany1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aboutcompany1Component]
    });
    fixture = TestBed.createComponent(Aboutcompany1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
