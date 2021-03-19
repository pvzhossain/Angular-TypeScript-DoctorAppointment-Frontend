import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chooseslot3Component } from './chooseslot3.component';

describe('Chooseslot3Component', () => {
  let component: Chooseslot3Component;
  let fixture: ComponentFixture<Chooseslot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chooseslot3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chooseslot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
