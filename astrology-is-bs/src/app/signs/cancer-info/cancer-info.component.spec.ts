import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerInfoComponent } from './cancer-info.component';

describe('CancerInfoComponent', () => {
  let component: CancerInfoComponent;
  let fixture: ComponentFixture<CancerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
