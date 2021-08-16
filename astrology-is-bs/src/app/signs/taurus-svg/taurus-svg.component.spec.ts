import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaurusSVGComponent } from './taurus-svg.component';

describe('TaurusSVGComponent', () => {
  let component: TaurusSVGComponent;
  let fixture: ComponentFixture<TaurusSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaurusSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaurusSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
