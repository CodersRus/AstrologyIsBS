import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscesInfoComponent } from './pisces-info.component';

describe('PiscesInfoComponent', () => {
  let component: PiscesInfoComponent;
  let fixture: ComponentFixture<PiscesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiscesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
