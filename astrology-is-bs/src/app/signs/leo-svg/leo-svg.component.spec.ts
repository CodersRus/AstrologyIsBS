import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoSVGComponent } from './leo-svg.component';

describe('LeoSVGComponent', () => {
  let component: LeoSVGComponent;
  let fixture: ComponentFixture<LeoSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeoSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeoSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
