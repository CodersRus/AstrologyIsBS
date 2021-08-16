import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirgoSVGComponent } from './virgo-svg.component';

describe('VirgoSVGComponent', () => {
  let component: VirgoSVGComponent;
  let fixture: ComponentFixture<VirgoSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirgoSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirgoSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
