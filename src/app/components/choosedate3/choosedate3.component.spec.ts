import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choosedate3Component } from './choosedate3.component';

describe('Choosedate3Component', () => {
  let component: Choosedate3Component;
  let fixture: ComponentFixture<Choosedate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Choosedate3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Choosedate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
