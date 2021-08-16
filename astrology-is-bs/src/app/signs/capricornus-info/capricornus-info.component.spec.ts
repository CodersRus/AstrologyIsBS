import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapricornusInfoComponent } from './capricornus-info.component';

describe('CapricornusInfoComponent', () => {
  let component: CapricornusInfoComponent;
  let fixture: ComponentFixture<CapricornusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapricornusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapricornusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
