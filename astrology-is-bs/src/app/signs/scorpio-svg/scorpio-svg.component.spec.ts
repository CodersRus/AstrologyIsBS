import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorpioSVGComponent } from './scorpio-svg.component';

describe('ScorpioSVGComponent', () => {
  let component: ScorpioSVGComponent;
  let fixture: ComponentFixture<ScorpioSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorpioSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorpioSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
