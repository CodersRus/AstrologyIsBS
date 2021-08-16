import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerSVGComponent } from './cancer-svg.component';

describe('CancerSVGComponent', () => {
  let component: CancerSVGComponent;
  let fixture: ComponentFixture<CancerSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
