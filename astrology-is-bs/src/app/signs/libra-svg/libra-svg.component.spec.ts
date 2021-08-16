import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraSVGComponent } from './libra-svg.component';

describe('LibraSVGComponent', () => {
  let component: LibraSVGComponent;
  let fixture: ComponentFixture<LibraSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
