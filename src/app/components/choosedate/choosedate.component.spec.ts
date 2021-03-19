import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedateComponent } from './choosedate.component';

describe('ChoosedateComponent', () => {
  let component: ChoosedateComponent;
  let fixture: ComponentFixture<ChoosedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
