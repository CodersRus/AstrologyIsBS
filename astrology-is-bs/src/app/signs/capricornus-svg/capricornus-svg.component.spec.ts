import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapricornusSVGComponent } from './capricornus-svg.component';

describe('CapricornusSVGComponent', () => {
  let component: CapricornusSVGComponent;
  let fixture: ComponentFixture<CapricornusSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapricornusSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapricornusSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
