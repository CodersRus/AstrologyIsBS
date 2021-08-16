import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeoInfoComponent } from './leo-info.component';

describe('LeoInfoComponent', () => {
  let component: LeoInfoComponent;
  let fixture: ComponentFixture<LeoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
