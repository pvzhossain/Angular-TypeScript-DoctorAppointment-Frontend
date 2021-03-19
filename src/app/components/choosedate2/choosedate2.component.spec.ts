import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choosedate2Component } from './choosedate2.component';

describe('Choosedate2Component', () => {
  let component: Choosedate2Component;
  let fixture: ComponentFixture<Choosedate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Choosedate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Choosedate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
