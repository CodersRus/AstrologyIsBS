import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariusSVGComponent } from './aquarius-svg.component';

describe('AquariusSVGComponent', () => {
  let component: AquariusSVGComponent;
  let fixture: ComponentFixture<AquariusSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariusSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariusSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
