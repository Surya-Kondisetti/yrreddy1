import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbannerComponent } from './cardbanner.component';

describe('CardbannerComponent', () => {
  let component: CardbannerComponent;
  let fixture: ComponentFixture<CardbannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardbannerComponent]
    });
    fixture = TestBed.createComponent(CardbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
