import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiSVGComponent } from './gemini-svg.component';

describe('GeminiSVGComponent', () => {
  let component: GeminiSVGComponent;
  let fixture: ComponentFixture<GeminiSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeminiSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeminiSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
