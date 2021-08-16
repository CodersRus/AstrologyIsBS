import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorpioInfoComponent } from './scorpio-info.component';

describe('ScorpioInfoComponent', () => {
  let component: ScorpioInfoComponent;
  let fixture: ComponentFixture<ScorpioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorpioInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorpioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
