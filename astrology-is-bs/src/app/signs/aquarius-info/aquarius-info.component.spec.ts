import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariusInfoComponent } from './aquarius-info.component';

describe('AquariusInfoComponent', () => {
  let component: AquariusInfoComponent;
  let fixture: ComponentFixture<AquariusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
