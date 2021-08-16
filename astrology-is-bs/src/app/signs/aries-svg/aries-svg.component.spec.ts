import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesSVGComponent } from './aries-svg.component';

describe('AriesSVGComponent', () => {
  let component: AriesSVGComponent;
  let fixture: ComponentFixture<AriesSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriesSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
