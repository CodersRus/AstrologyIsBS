import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiInfoComponent } from './gemini-info.component';

describe('GeminiInfoComponent', () => {
  let component: GeminiInfoComponent;
  let fixture: ComponentFixture<GeminiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeminiInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeminiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
