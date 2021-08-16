import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscesSVGComponent } from './pisces-svg.component';

describe('PiscesSVGComponent', () => {
  let component: PiscesSVGComponent;
  let fixture: ComponentFixture<PiscesSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscesSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiscesSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
