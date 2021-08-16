import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraInfoComponent } from './libra-info.component';

describe('LibraInfoComponent', () => {
  let component: LibraInfoComponent;
  let fixture: ComponentFixture<LibraInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
