import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chooseslot2Component } from './chooseslot2.component';

describe('Chooseslot2Component', () => {
  let component: Chooseslot2Component;
  let fixture: ComponentFixture<Chooseslot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chooseslot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chooseslot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
